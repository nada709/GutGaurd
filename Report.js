// Report.js - JavaScript for GutGuard Report functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts and components
    initializeHealthScore();
    initializeMarkersChart();
    initializeSymptomsChart();
    initializeSymptomTracker();
    initializeLabResults();
    initializePDFScanner();
    
    // Add event listeners
    document.getElementById('add-lab-button').addEventListener('click', showLabResultForm);
    document.getElementById('track-button').addEventListener('click', saveSymptoms);
    document.getElementById('export-data').addEventListener('click', exportData);
    
    // Initialize the severity slider display
    const severitySlider = document.getElementById('severity-slider');
    const severityValue = document.getElementById('severity-value');
    
    if (severitySlider && severityValue) {
        severitySlider.addEventListener('input', function() {
            severityValue.textContent = this.value;
        });
    }
});

// Health Score Functionality
function initializeHealthScore() {
    // Get score element
    const scoreCircle = document.querySelector('.score-circle');
    const scoreValue = document.querySelector('.score-value');
    
    // Sample data - in real app would come from database
    const score = 100; // From image 1
    
    // Update the score display
    if (scoreCircle && scoreValue) {
        scoreCircle.style.setProperty('--score', score);
        scoreValue.textContent = score;
    }
    
    // Update indicators
    updateIndicators({
        digestion: 0,
        inflammation: 0,
        absorption: 0,
        microbiome: 0
    });
}

function updateIndicators(indicators) {
    const indicatorElements = document.querySelectorAll('.indicator');
    
    if (indicatorElements.length >= 4) {
        // Digestion
        updateIndicator(indicatorElements[0], indicators.digestion, '0%');
        
        // Inflammation
        updateIndicator(indicatorElements[1], indicators.inflammation, '0%');
        
        // Absorption
        updateIndicator(indicatorElements[2], indicators.absorption, '0%');
        
        // Microbiome
        updateIndicator(indicatorElements[3], indicators.microbiome, '0%');
    }
}

function updateIndicator(element, value, trend) {
    if (element) {
        const valueElement = element.querySelector('.indicator-value');
        const trendElement = element.querySelector('.indicator-trend');
        
        if (valueElement) valueElement.textContent = value;
        if (trendElement) {
            trendElement.textContent = trend;
            
            // Remove existing classes
            trendElement.classList.remove('positive', 'negative', 'neutral');
            
            // Add appropriate class based on trend
            if (trend.includes('-')) {
                trendElement.classList.add('negative');
            } else if (trend === '0%') {
                trendElement.classList.add('neutral');
            } else {
                trendElement.classList.add('positive');
            }
        }
    }
}

// Markers Chart Functionality
function initializeMarkersChart() {
    const ctx = document.getElementById('markersChart');
    if (!ctx) return;

    // Start with empty datasets
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
            {
                label: 'CRP (mg/L)',
                data: [0, 0, 0, 0],
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                borderWidth: 2,
                tension: 0.1,
            },
            {
                label: 'Calprotectin (μg/g)',
                data: [0, 0, 0, 0],
                borderColor: 'rgb(244, 63, 94)',
                backgroundColor: 'rgba(244, 63, 94, 0.2)',
                borderWidth: 2,
                tension: 0.1,
            },
            {
                label: 'Vitamin D (ng/mL)',
                data: [0, 0, 0, 0],
                borderColor: 'rgb(250, 204, 21)',
                backgroundColor: 'rgba(250, 204, 21, 0.2)',
                borderWidth: 2,
                tension: 0.1,
            },
        ],
    };
    
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true },
            },
            plugins: { legend: { position: 'bottom' } },
        },
    });
}

// Symptom Distribution Chart
function initializeSymptomsChart() {
    const ctx = document.getElementById('symptomsChart');
    if (!ctx) return;

    // Start with empty symptom distribution
    const data = {
        labels: ['Digestive', 'Pain', 'Fatigue', 'Mood', 'Other'],
        datasets: [
            {
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgb(99, 102, 241)',
                    'rgb(79, 70, 229)',
                    'rgb(139, 92, 246)',
                    'rgb(168, 85, 247)',
                    'rgb(216, 180, 254)',
                ],
                hoverOffset: 4,
                borderWidth: 0,
            },
        ],
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: { legend: { position: 'bottom' } },
        },
    });
}

// Symptom Tracker Functionality
function initializeSymptomTracker() {
    const ctx = document.getElementById('symptomHistoryChart');
    
    if (!ctx) return;
    
    // Sample symptom history data
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'Symptom Severity',
            data: [0, 0, 0, 0, 0, 0, 0],
            borderColor: 'rgb(99, 102, 241)',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            borderWidth: 2,
            tension: 0.3,
            fill: true,
        }]
    };
    
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10,
                    title: { display: true, text: 'Severity' },
                },
                x: { title: { display: true, text: 'Day' } },
            },
            plugins: { legend: { display: false } },
        },
    });

    
    // Set today's date in the tracker
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date();
        const formattedDate = today.toISOString().substring(0, 10);
        dateInput.value = formattedDate;
    }
    
    // Pre-check some symptoms as shown in image 2
    const checkedSymptoms = ['bloating', 'abdominal-pain', 'constipation'];
    checkedSymptoms.forEach(symptom => {
        const checkbox = document.getElementById(symptom);
        if (checkbox) checkbox.checked = true;
    });
    
    // Reset severity slider to default value
    const severitySlider = document.getElementById('severity-slider');
    const severityValue = document.getElementById('severity-value');
    if (severitySlider && severityValue) {
        severitySlider.value = 0;
        severityValue.textContent = 0;
    }
}

function saveSymptoms() {
    // Get all checked symptoms
    const checkedSymptoms = [];
    document.querySelectorAll('.symptom-checkbox:checked').forEach(checkbox => {
        checkedSymptoms.push(checkbox.id);
    });
    
    // Get severity
    const severity = document.getElementById('severity-slider').value;
    
    // Get date
    const date = document.querySelector('input[type="date"]').value;
    
    // Calculate disease rate (inverse of severity)
    // Severity 0 = 100% disease rate (good health)
    // Severity 10 = 0% disease rate (poor health)
    const diseaseRate = 100 - (severity * 10);
    
    // In a real app, this would be saved to a database
    const symptomData = {
        date: date,
        symptoms: checkedSymptoms,
        severity: severity,
        diseaseRate: diseaseRate
    };
    
    console.log('Saved symptom data:', symptomData);
    
    // Check if we already have today's entry
    const today = new Date().toISOString().substring(0, 10);
    const existingCard = document.querySelector(`.symptom-card[data-date="${today}"]`);
    
    if (existingCard) {
        // Update existing card
        const rateElement = existingCard.querySelector('.disease-rate-value');
        const rateBar = existingCard.querySelector('.disease-rate-bar');
        
        if (rateElement) {
            rateElement.textContent = `${diseaseRate}%`;
        }
        
        if (rateBar) {
            rateBar.style.width = `${diseaseRate}%`;
            
            // Update color based on disease rate
            rateBar.className = 'disease-rate-bar';
            if (diseaseRate < 30) {
                rateBar.classList.add('poor');
            } else if (diseaseRate < 70) {
                rateBar.classList.add('moderate');
            } else {
                rateBar.classList.add('good');
            }
        }
        
        // Show update confirmation
        alert('Today\'s symptom data updated successfully!');
    } else {
        // Create new symptom card
        const symptomTracker = document.querySelector('.symptom-history') || document.querySelector('.symptom-tracker');
        
        if (symptomTracker) {
            const card = document.createElement('div');
            card.className = 'symptom-card';
            card.setAttribute('data-date', today);
            
            // Format date for display
            const displayDate = new Date(date).toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
            });
            
            // Determine color class based on disease rate
            let rateClass = 'good';
            if (diseaseRate < 30) {
                rateClass = 'poor';
            } else if (diseaseRate < 70) {
                rateClass = 'moderate';
            }
            
            card.innerHTML = `
                <div class="card-header">
                    <div class="card-date">${displayDate}</div>
                    <div class="symptom-count">${checkedSymptoms.length} symptom(s)</div>
                </div>
                <div class="disease-rate">
                    <div class="disease-rate-label">Health Score</div>
                    <div class="disease-rate-value">${diseaseRate}%</div>
                </div>
                <div class="disease-rate-container">
                    <div class="disease-rate-bar ${rateClass}" style="width: ${diseaseRate}%"></div>
                </div>
            `;
            
            // Add to the beginning of the container
            const firstChild = symptomTracker.firstChild;
            if (firstChild) {
                symptomTracker.insertBefore(card, firstChild);
            } else {
                symptomTracker.appendChild(card);
            }
            
            // Add CSS for the card
            addSymptomCardStyles();
            
            // Show confirmation
            alert('Symptoms saved successfully!');
        }
    }
    
    // Update charts (in a real app, this would fetch updated data)
    // For demo purposes, we could refresh charts
    updateSymptomCharts(diseaseRate);
}

function exportData() {
    // In a real app, this would generate CSV or PDF with user data
    alert('Data export functionality would be implemented here.');
}

// Lab Results Functionality
function initializeLabResults() {
    // Reset lab results to default values
    const labTests = document.querySelectorAll('.lab-test');
    labTests.forEach(test => {
        const valueElement = test.querySelector('.lab-test-value');
        if (valueElement) {
            valueElement.textContent = 'N/A';
            valueElement.classList.remove('normal', 'high', 'low');
        }
    });
}

function showLabResultForm() {
    // Create modal for entering lab results
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Add Lab Results</h2>
            
            <div class="tabs">
                <button class="tab-button active" data-tab="manual">Manual Entry</button>
                <button class="tab-button" data-tab="pdf">Upload PDF</button>
            </div>
            
            <div class="tab-content" id="manual-tab">
                <form id="lab-form">
                    <div class="form-group">
                        <label for="test-date">Test Date</label>
                        <input type="date" id="test-date" required>
                    </div>
                    
                    <h3>Enter Values</h3>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="hemoglobin">Hemoglobin (g/dL)</label>
                            <input type="number" id="hemoglobin" step="0.1" placeholder="12.0-16.0">
                        </div>
                        <div class="form-group">
                            <label for="crp">CRP (mg/L)</label>
                            <input type="number" id="crp" step="0.1" placeholder="0.0-1.0">
                        </div>
                        <div class="form-group">
                            <label for="ferritin">Ferritin (ng/mL)</label>
                            <input type="number" id="ferritin" step="1" placeholder="20-250">
                        </div>
                        <div class="form-group">
                            <label for="vitamin-d">Vitamin D (ng/mL)</label>
                            <input type="number" id="vitamin-d" step="1" placeholder="30-100">
                        </div>
                        <div class="form-group">
                            <label for="calprotectin">Calprotectin (μg/g)</label>
                            <input type="number" id="calprotectin" step="1" placeholder="0-50">
                        </div>
                        <div class="form-group">
                            <label for="b12">B12 (pg/mL)</label>
                            <input type="number" id="b12" step="1" placeholder="200-900">
                        </div>
                    </div>
                    
                    <button type="submit" class="btn">Save Results</button>
                </form>
            </div>
            
            <div class="tab-content" id="pdf-tab" style="display: none;">
                <div class="pdf-upload">
                    <h3>Upload Lab Report PDF</h3>
                    <p>Upload your blood test or colonoscopy PDF report for automatic extraction</p>
                    
                    <div class="upload-area" id="upload-area">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 17V3M12 3L7 8M12 3L17 8" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 15V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Drag & drop your PDF file or <span class="browse-link">browse files</span></p>
                        <input type="file" id="pdf-file" accept=".pdf" style="display: none;">
                    </div>
                    
                    <div class="extracted-data" id="extracted-data" style="display: none;">
                        <h4>Extracted Values</h4>
                        <div id="extracted-values"></div>
                        <button class="btn" id="confirm-extraction">Confirm & Save</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners for the modal
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Tab functionality
    const tabButtons = modal.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Hide all tab content
            modal.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
            });
            
            // Show selected tab content
            const tabId = button.getAttribute('data-tab');
            modal.querySelector(`#${tabId}-tab`).style.display = 'block';
        });
    });
    
    // Lab form submission
    const labForm = modal.querySelector('#lab-form');
    labForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            testDate: document.getElementById('test-date').value,
            hemoglobin: document.getElementById('hemoglobin').value,
            crp: document.getElementById('crp').value,
            ferritin: document.getElementById('ferritin').value,
            vitaminD: document.getElementById('vitamin-d').value,
            calprotectin: document.getElementById('calprotectin').value,
            b12: document.getElementById('b12').value
        };
        
        console.log('Lab results submitted:', formData);
        
        // In a real app, this would save to a database
        // For demo purposes, update the UI
        updateLabResults(formData);
        
        // Close modal
        document.body.removeChild(modal);
    });
    
    // PDF upload functionality
    const uploadArea = modal.querySelector('#upload-area');
    const pdfInput = modal.querySelector('#pdf-file');
    const browseLink = modal.querySelector('.browse-link');
    
    browseLink.addEventListener('click', () => {
        pdfInput.click();
    });
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('drag-over');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        
        if (e.dataTransfer.files.length) {
            handlePDFFile(e.dataTransfer.files[0], modal);
        }
    });
    
    pdfInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handlePDFFile(e.target.files[0], modal);
        }
    });
    
    // Set today's date as default
    const testDateInput = document.getElementById('test-date');
    if (testDateInput) {
        const today = new Date();
        const formattedDate = today.toISOString().substring(0, 10);
        testDateInput.value = formattedDate;
    }
}

function handlePDFFile(file, modal) {
    if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file');
        return;
    }
    
    // Show loading state
    const uploadArea = modal.querySelector('#upload-area');
    uploadArea.innerHTML = '<p>Processing PDF...</p><div class="spinner"></div>';
    
    // In a real app, this would send the PDF to a server for OCR processing
    // For demo purposes, simulate PDF extraction with setTimeout
    setTimeout(() => {
        // Simulate extracted data
        const extractedData = simulatePDFExtraction(file.name);
        
        // Show extraction results
        const extractedDataDiv = modal.querySelector('#extracted-data');
        const extractedValuesDiv = modal.querySelector('#extracted-values');
        
        // Create table of extracted values
        let extractedHTML = '<table class="extracted-table">';
        extractedHTML += '<tr><th>Test</th><th>Value</th><th>Reference Range</th></tr>';
        
        for (const [key, value] of Object.entries(extractedData)) {
            let range = '';
            switch(key) {
                case 'Hemoglobin': range = '12.0-16.0 g/dL'; break;
                case 'CRP': range = '0.0-1.0 mg/L'; break;
                case 'Ferritin': range = '20-250 ng/mL'; break;
                case 'Vitamin D': range = '30-100 ng/mL'; break;
                case 'Calprotectin': range = '0-50 μg/g'; break;
                case 'B12': range = '200-900 pg/mL'; break;
            }
            
            extractedHTML += `<tr>
                <td>${key}</td>
                <td><input type="number" value="${value}" step="0.1" class="extracted-input" data-test="${key}"></td>
                <td>${range}</td>
            </tr>`;
        }
        
        extractedHTML += '</table>';
        extractedValuesDiv.innerHTML = extractedHTML;
        
        // Show extracted data section
        uploadArea.style.display = 'none';
        extractedDataDiv.style.display = 'block';
        
        // Add event listener for confirm button
        const confirmBtn = modal.querySelector('#confirm-extraction');
        confirmBtn.addEventListener('click', () => {
            // Get values from inputs
            const formData = {};
            modal.querySelectorAll('.extracted-input').forEach(input => {
                const test = input.getAttribute('data-test');
                formData[test.toLowerCase().replace(' ', '')] = input.value;
            });
            
            console.log('Extracted lab results:', formData);
            
            // In a real app, this would save to a database
            // For demo purposes, update the UI
            updateLabResults({
                testDate: new Date().toISOString().substring(0, 10),
                hemoglobin: formData.hemoglobin || '',
                crp: formData.crp || '',
                ferritin: formData.ferritin || '',
                vitaminD: formData.vitamind || '',
                calprotectin: formData.calprotectin || '',
                b12: formData.b12 || ''
            });
            
            // Close modal
            document.body.removeChild(modal);
        });
    }, 2000);
}

function simulatePDFExtraction(filename) {
    // Simulate different results based on filename
    // In a real app, this would be done by OCR and NLP on the server
    if (filename.toLowerCase().includes('blood')) {
        return {
            'Hemoglobin': 13.2,
            'CRP': 0.8,
            'Ferritin': 78,
            'Vitamin D': 32,
            'B12': 450
        };
    } else if (filename.toLowerCase().includes('colonoscopy')) {
        return {
            'Calprotectin': 42
        };
    } else {
        // Generic sample data
        return {
            'Hemoglobin': 14.0,
            'CRP': 0.5,
            'Ferritin': 120,
            'Vitamin D': 45,
            'Calprotectin': 30,
            'B12': 550
        };
    }
}

function updateLabResults(data) {
    // Update the lab result values in the UI
    const labTests = document.querySelectorAll('.lab-test');
    
    if (labTests.length >= 6) {
        // Update Hemoglobin
        if (data.hemoglobin) {
            updateLabTest(labTests[0], data.hemoglobin, '12.0-16.0 g/dL');
        }
        
        // Update CRP
        if (data.crp) {
            updateLabTest(labTests[1], data.crp, '0.0-1.0 mg/L');
        }
        
        // Update Ferritin
        if (data.ferritin) {
            updateLabTest(labTests[2], data.ferritin, '20-250 ng/mL');
        }
        
        // Update Vitamin D
        if (data.vitaminD) {
            updateLabTest(labTests[3], data.vitaminD, '30-100 ng/mL');
        }
        
        // Update Calprotectin
        if (data.calprotectin) {
            updateLabTest(labTests[4], data.calprotectin, '0-50 μg/g');
        }
        
        // Update B12
        if (data.b12) {
            updateLabTest(labTests[5], data.b12, '200-900 pg/mL');
        }
    }
    
    // In a real app, this would also update the charts with new data
    updateHealthScore();
    
    // Show personalized recommendations based on new data
    updateRecommendations(data);
}

function updateLabTest(element, value, range) {
    const valueElement = element.querySelector('.lab-test-value');
    if (valueElement) {
        valueElement.textContent = value;
        
        // Add color coding based on whether value is in range
        const [min, max] = range.split('-')[0] && range.split('-')[1] ? 
            [parseFloat(range.split('-')[0]), parseFloat(range.split('-')[1])] : 
            [null, null];
        
        valueElement.classList.remove('normal', 'high', 'low');
        
        if (min !== null && max !== null) {
            const numValue = parseFloat(value);
            if (numValue < min) {
                valueElement.classList.add('low');
            } else if (numValue > max) {
                valueElement.classList.add('high');
            } else {
                valueElement.classList.add('normal');
            }
        }
    }
}

function updateHealthScore() {
    // In a real app, this would recalculate the health score based on lab values and symptoms
    // For demo purposes, we'll just set it to the value in the image
    const scoreCircle = document.querySelector('.score-circle');
    const scoreValue = document.querySelector('.score-value');
    const scoreLabel = document.querySelector('.score-label');
    
    if (scoreCircle && scoreValue && scoreLabel) {
        scoreCircle.style.setProperty('--score', 74);
        scoreValue.textContent = 74;
        scoreLabel.textContent = 'Start Tracking';
    }
}

function updateRecommendations(data) {
    // In a real app, this would generate personalized recommendations
    // For demo purposes, we'll just update with generic recommendations
    const recommendations = document.querySelector('.recommendations');
    
    if (!recommendations) return;
    
    let content = '<h3>Personalized Recommendations</h3><ul>';
    
    // Check if we have any lab values below normal
    if (data.vitaminD && parseFloat(data.vitaminD) < 30) {
        content += '<li>Your Vitamin D levels are below optimal range. Consider supplementation and more sun exposure.</li>';
    }
    
    if (data.calprotectin && parseFloat(data.calprotectin) > 50) {
        content += '<li>Your Calprotectin levels indicate intestinal inflammation. Consider an anti-inflammatory diet.</li>';
    }
    
    if (data.b12 && parseFloat(data.b12) < 200) {
        content += '<li>Your B12 levels are low. Increase intake of animal products or consider supplementation.</li>';
    }
    
    // General recommendations
    content += '<li>Continue tracking your symptoms daily</li>';
    content += '<li>Stay hydrated with at least 8 glasses of water daily</li>';
    content += '<li>Consider consulting with a gastroenterologist for personalized advice</li>';
    content += '</ul>';
    
    recommendations.innerHTML = content;
}

// PDF Scanner Functionality
function initializePDFScanner() {
    // This would initialize the PDF scanner library
    // For demo purposes, this is handled in the handlePDFFile function
}

// Function to add CSS styles for symptom cards
function addSymptomCardStyles() {
    // Check if styles already exist
    if (document.getElementById('symptom-card-styles')) {
        return;
    }
    
    const styleElement = document.createElement('style');
    styleElement.id = 'symptom-card-styles';
    
    styleElement.textContent = `
        .symptom-card {
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
            background-color: white;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }
        
        .card-date {
            font-weight: 600;
        }
        
        .symptom-count {
            color: #6b7280;
            font-size: 0.9rem;
        }
        
        .disease-rate {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.25rem;
        }
        
        .disease-rate-label {
            font-weight: 500;
        }
        
        .disease-rate-value {
            font-weight: 600;
        }
        
        .disease-rate-container {
            height: 8px;
            background-color: #e5e7eb;
            border-radius: 4px;
            overflow: hidden;
        }
        
        .disease-rate-bar {
            height: 100%;
            border-radius: 4px;
            transition: width 0.3s ease;
        }
        
        .disease-rate-bar.poor {
            background-color: #ef4444;
        }
        
        .disease-rate-bar.moderate {
            background-color: #f59e0b;
        }
        
        .disease-rate-bar.good {
            background-color: #10b981;
        }
    `;
    
    document.head.appendChild(styleElement);
}

// Function to update symptom charts with new data
function updateSymptomCharts(latestDiseaseRate) {
    const symptomHistoryChart = document.getElementById('symptomHistoryChart');
    
    if (symptomHistoryChart && window.Chart) {
        const chart = Chart.getChart(symptomHistoryChart);
        
        if (chart) {
            // Get current data
            const chartData = chart.data;
            
            // Calculate severity from disease rate (inverse relationship)
            const severity = 10 - (latestDiseaseRate / 10);
            
            // Add new data point (or update today's value)
            const today = new Date().toLocaleDateString('en-US', { weekday: 'short' });
            const labels = chartData.labels;
            const data = chartData.datasets[0].data;
            
            const todayIndex = labels.indexOf('Today');
            if (todayIndex >= 0) {
                // Update today's value
                data[todayIndex] = severity;
            } else {
                // Shift data if we have 7+ days
                if (labels.length >= 7) {
                    labels.shift();
                    data.shift();
                }
                
                // Add today's value
                labels.push('Today');
                data.push(severity);
            }
            
            // Update chart
            chart.update();
        }
    }
    
    // Also update the health score in the main dashboard if it exists
    updateHealthScore(latestDiseaseRate);
}

// Add CSS for the modal
const style = document.createElement('style');
style.textContent = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    
    .modal-content {
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        width: 90%;
        max-width: 600px;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
    }
    
    .close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
    }
    
    .tabs {
        display: flex;
        margin-bottom: 1rem;
        border-bottom: 1px solid #e5e7eb;
    }
    
    .tab-button {
        padding: 0.5rem 1rem;
        border: none;
        background: none;
        cursor: pointer;
        border-bottom: 2px solid transparent;
    }
    
    .tab-button.active {
        border-bottom: 2px solid #6366f1;
        color: #6366f1;
    }
    
    .form-group {
        margin-bottom: 1rem;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }
    
    .form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
    }
    
    input[type="number"],
    input[type="date"] {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #e5e7eb;
        border-radius: 4px;
    }
    
    .upload-area {
        border: 2px dashed #e5e7eb;
        border-radius: 8px;
        padding: 2rem;
        text-align: center;
        margin: 1rem 0;
        cursor: pointer;
    }
    
    .upload-area.drag-over {
        border-color: #6366f1;
        background-color: rgba(99, 102, 241, 0.05);
    }
    
    .browse-link {
        color: #6366f1;
        text-decoration: underline;
        cursor: pointer;
    }
    
    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: #6366f1;
        animation: spin 1s linear infinite;
        margin: 1rem auto;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .extracted-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
    }
    
    .extracted-table th,
    .extracted-table td {
        padding: 0.5rem;
        border: 1px solid #e5e7eb;
    }
    
    .extracted-input {
        width: 100%;
        padding: 0.25rem;
        border: 1px solid #e5e7eb;
        border-radius: 4px;
    }
    
    .lab-test-value.normal {
        color: green;
    }
    
    .lab-test-value.high {
        color: red;
    }
    
    .lab-test-value.low {
        color: orange;
    }
`;

document.head.appendChild(style);