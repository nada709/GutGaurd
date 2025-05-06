const { useState, useEffect, useRef } = React;

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [analysisMode, setAnalysisMode] = useState('short');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadType, setUploadType] = useState('blood_test');
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    fetchRandomGreeting();
    fetchDocuments();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchRandomGreeting = async () => {
    try {
      const response = await fetch('http://localhost:8000/random_greeting');
      if (response.ok) {
        const data = await response.json();
        setMessages([{
          role: 'assistant',
          content: data.greeting || 'Hello! I can help analyze blood test or colonoscopy PDFs or answer general health questions.',
          type: 'normal'
        }]);
      } else {
        setMessages([{
          role: 'assistant',
          content: 'Hello! I can help analyze blood test or colonoscopy PDFs or answer general health questions.',
          type: 'normal'
        }]);
      }
    } catch (error) {
      console.error('Error fetching greeting:', error);
      setMessages([{
        role: 'assistant',
        content: 'Hello! I can help analyze blood test or colonoscopy PDFs or answer general health questions.',
        type: 'normal'
      }]);
    }
  };

  const fetchDocuments = async () => {
    try {
      const response = await fetch('http://localhost:8000/documents');
      const data = await response.json();
      setDocuments(data.documents || []);
    } catch (error) {
      console.error('Error fetching documents:', error);
      setDocuments([]);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: 'user',
      content: input.trim(),
      type: 'normal'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_input: userMessage.content,
          document_id: selectedDocument,
          session_id: sessionId
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.session_id) {
        setSessionId(data.session_id);
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response,
        type: 'normal'
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I encountered an error sending your message: ${error.message}`,
        type: 'error'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      console.warn("No file selected for upload.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('doc_type', uploadType);

    try {
      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorDetail = await response.text();
        throw new Error(`HTTP error! status: ${response.status}. Detail: ${errorDetail}`);
      }

      const data = await response.json();

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `**${selectedFile.name}** was successfully analyzed as a ${uploadType.replace('_', ' ')}. You can now ask questions about this document.`,
        type: 'normal'
      }]);

      setSelectedDocument(data.document_id);
      fetchDocuments();

    } catch (error) {
      console.error('Error uploading file:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I encountered an error uploading the file: ${error.message}`,
        type: 'error'
      }]);
    } finally {
      setLoading(false);
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSelectDocument = (docId) => {
    if (!docId) {
        setSelectedDocument(null);
        setMessages(prev => [...prev, {
            role: 'assistant',
            content: `You are no longer focused on a specific document. Ask a general health question.`,
            type: 'normal'
          }]);
        return;
    }

    setSelectedDocument(docId);
    const selectedDoc = documents.find(doc => doc.document_id === docId);

    setMessages(prev => [...prev, {
      role: 'assistant',
      content: `I've selected the document: **${selectedDoc?.filename || 'Unknown'}** (${selectedDoc?.type?.replace('_', ' ') || 'Unknown type'}). You can now ask questions about it.`,
      type: 'normal'
    }]);
  };

  const getDiseaseInfo = async (diseaseName) => {
    if (!diseaseName) return;

    setLoading(true);

    try {
      const response = await fetch(`http://localhost:8000/disease_info/${encodeURIComponent(diseaseName)}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      let diseaseInfoMessage = `## ${data.disease || 'Unknown Disease'}\n\n`;
      diseaseInfoMessage += `**Description:** ${data.description || 'N/A'}\n\n`;

      if (data.symptoms && data.symptoms.length > 0) {
        diseaseInfoMessage += "**Symptoms:**\n";
        data.symptoms.forEach(symptom => {
          diseaseInfoMessage += `- ${symptom}\n`;
        });
        diseaseInfoMessage += "\n";
      } else {
          diseaseInfoMessage += "**Symptoms:** N/A\n\n";
      }

      if (data.treatments && data.treatments.length > 0) {
        diseaseInfoMessage += "**Treatments:**\n";
        data.treatments.forEach(treatment => {
          diseaseInfoMessage += `- ${treatment}\n`;
        });
         diseaseInfoMessage += "\n";
      } else {
          diseaseInfoMessage += "**Treatments:** N/A\n\n";
      }

      if (data.additional_notes && data.additional_notes.length > 0) {
         diseaseInfoMessage += `**Additional Notes:** ${data.additional_notes.join(' ')}`;
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: diseaseInfoMessage,
        type: 'normal'
      }]);
    } catch (error) {
      console.error('Error fetching disease info:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I couldn't retrieve information for ${diseaseName}: ${error.message}`,
        type: 'error'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const generateMealPlan = async (diseaseName) => {
    if (!diseaseName) return;

    setLoading(true);

    try {
      const response = await fetch(`http://localhost:8000/meal_plan/${encodeURIComponent(diseaseName)}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      let mealPlanMessage = `## Meal Plan for ${data.disease || 'Unknown Condition'}\n\n`;
      mealPlanMessage += `**Condition Description:** ${data.description || 'N/A'}\n\n`;

      if (data.meal_plans && data.meal_plans.length > 0) {
        data.meal_plans.forEach((plan, index) => {
          mealPlanMessage += `### Day ${plan.day || (index + 1)}\n\n`;
          mealPlanMessage += `**Breakfast:** ${plan.breakfast?.join(', ') || 'N/A'}\n\n`;
          mealPlanMessage += `**Lunch:** ${plan.lunch?.join(', ') || 'N/A'}\n\n`;
          mealPlanMessage += `**Dinner:** ${plan.dinner?.join(', ') || 'N/A'}\n\n`;
          mealPlanMessage += `**Snacks:** ${plan.snacks?.join(', ') || 'N/A'}\n\n`;
          mealPlanMessage += `**Nutrition Notes:** ${plan.nutrition_notes || 'N/A'}\n\n`;
        });
      } else {
           mealPlanMessage += "No meal plan details available.\n\n";
      }

       if (data.additional_notes && data.additional_notes.length > 0) {
         mealPlanMessage += `**Additional Notes:** ${data.additional_notes.join(' ')}`;
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: mealPlanMessage,
        type: 'normal'
      }]);
    } catch (error) {
      console.error('Error generating meal plan:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I couldn't generate a meal plan for ${diseaseName}: ${error.message}`,
        type: 'error'
      }]);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-2">GutGuard Medical Assistant</h1>
      <p className="text-center text-gray-600 mb-8">Upload medical results or ask questions about gut health</p>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="chat-container mb-6 overflow-y-auto max-h-[60vh]">
          {messages.map((message, index) => (
            message.role === 'user' ? (
              <div key={index} className="flex justify-end mb-4">
                <div className="user-message bg-indigo-500 text-white rounded-lg p-3 max-w-xs md:max-w-md break-words">
                  <div className="font-bold mb-1">You</div>
                  <div>{message.content}</div>
                </div>
              </div>
            ) : (
              <div key={index} className={`flex mb-4 ${message.type === 'error' ? 'text-amber-700 bg-amber-100' : 'text-gray-800 bg-gray-50'} rounded-lg p-3 max-w-xs md:max-w-md break-words`}>
                 <div className="flex-shrink-0 mr-2">
                    {message.type === 'error' ?
                      <span className="text-amber-500">⚠️</span> :
                      <span className="text-indigo-600">👨‍⚕️</span>
                    }
                 </div>
                <div className="flex-1">
                  <div className="font-bold mb-1">GutGuard Assistant</div>
                  <div dangerouslySetInnerHTML={{ __html: marked.parse(message.content) }}></div>
                </div>
              </div>
            )
          ))}
          {loading && (
            <div className="flex mb-4 assistant-message bg-gray-50 rounded-lg p-3 max-w-max animate-pulse">
              <div className="flex-shrink-0 mr-2 text-indigo-600">👨‍⚕️</div>
              <div>Processing...</div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="mb-6 border-t pt-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">Upload Medical Document</label>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center">
            <div className="flex-grow w-full md:w-auto">
              <select
                value={uploadType}
                onChange={(e) => setUploadType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2 md:mb-0">
                <option value="blood_test">Blood Test PDF</option>
                <option value="colonoscopy">Colonoscopy PDF</option>
              </select>
              <div className="flex space-x-2 items-center">
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed" disabled={loading}>
                  Choose File
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf"
                />
                <div className="flex-1 py-2 text-gray-600 truncate">
                  {selectedFile ? selectedFile.name : 'No file chosen (.pdf only)'}
                </div>
                {selectedFile && (
                  <button
                    onClick={handleFileUpload}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed" disabled={loading}>
                    Analyze PDF
                  </button>
                )}
              </div>
            </div>
          </div>

          {documents.length > 0 && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chat about a previous document:
              </label>
              <select
                value={selectedDocument || ''}
                onChange={(e) => handleSelectDocument(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select a document (or none)</option>
                {documents.map((doc) => (
                  <option key={doc.document_id} value={doc.document_id}>
                    {doc.filename} ({doc.type.replace('_', ' ')})
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mt-4 border-t pt-4">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Quick Actions (General Info):
            </label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => getDiseaseInfo("IBS")} className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled={loading}>
                IBS Info
              </button>
              <button onClick={() => generateMealPlan("IBS")} className="bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled={loading}>
                IBS Diet Plan
              </button>
            </div>
          </div>
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !loading && handleSend()}
            placeholder={selectedDocument ? "Ask a question about the selected document..." : "Ask a general health question..."}
            className="flex-1 p-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-r-md disabled:opacity-50 disabled:cursor-not-allowed">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));