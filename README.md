# Medical Analysis Chatbot - Graduation Project

## Project Overview
Our Medical Analysis Chatbot is an AI-powered system designed to help users understand medical test results and answer health-related questions. Developed as a comprehensive graduation project, this application bridges the gap between complex medical information and patient understanding by providing clear, accurate explanations while emphasizing the importance of professional medical consultation.

## Key Features
- **PDF Blood Test Analysis**: Upload and receive explanations of lab results with abnormal value detection
- **Medical Q&A**: Ask general health questions with short or detailed response options
- **Context-Aware Suggestions**: Dynamic follow-up questions based on conversation flow
- **Personalized Health Tips**: Condition-specific wellness recommendations
- **Comprehensive Medical Database**: 20+ gastrointestinal conditions with detailed information

## Technology Stack
### Backend
- **Python 3.9+**
- **FastAPI**: Web framework for building APIs
- **Ollama**: Local LLM management
- **Mistral 7B**: Open-weight language model for medical analysis
- **LangChain**: Document processing framework
- **PyPDF2**: PDF text extraction

### Frontend
- **HTML5/CSS3**: Structure and styling
- **JavaScript**: Client-side functionality
- **Marked.js**: Markdown rendering
- **Fetch API**: Backend communication

### Data
- **Custom JSON Dataset**: Structured medical information
- **Medical Sources**: CDC, NIH, peer-reviewed journals

## Installation Guide

### Prerequisites
- Python 3.9+
- Node.js (for frontend development)
- Ollama with Mistral model
- Modern web browser

### Backend Setup
```bash
git clone https://github.com/ourusername/medical-chatbot.git
cd medical-chatbot
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate  # Windows
pip install fastapi uvicorn langchain pypdf python-multipart
uvicorn backend:app --reload


### Frontend Setup
```bash
python -m http.server 8001

Access at: `http://localhost:8001/frontend.html`

## Usage Instructions

### Web Interface
1. Open the frontend in your browser
2. Upload blood test PDFs or type health questions
3. Toggle between response formats
4. View analysis and follow-up suggestions

### API Endpoints
| Endpoint | Method | Description | Example |
|----------|--------|-------------|---------|
| `/upload` | POST | Process PDF blood tests | `curl -X POST -F "file=@test.pdf" http://localhost:8000/upload` |
| `/chat` | POST | Submit health questions | `curl -X POST -H "Content-Type: application/json" -d '{"user_input":"normal blood sugar"}' http://localhost:8000/chat` |
| `/health` | GET | System status check | `curl http://localhost:8000/health` |

## Dataset Details
Our comprehensive medical dataset includes:
- **Symptom tracking**: Detailed descriptions
- **diseases misdiagnoseda as ibs**: to enhanceblood test and colonscopy analysis
- **Dietary Guidance**: Foods to eat/avoid


**Sources**:
- Harrison's Principles of Internal Medicine
- CDC/NIH guidelines
- Peer-reviewed journals
- Mayo Clinic references

## System Architecture

┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│             │    │             │    │             │
│  Frontend   │◄──►│  Backend    │◄──►│  LLM        │
│ (HTML/JS)   │    │ (FastAPI)   │    │ (Mistral)   │
│             │    │             │    │             │
└─────────────┘    └──────┬──────┘    └─────────────┘
                          │
                          ▼
                   ┌───────────────┐
                   │  Medical      │
                   │  Dataset      │
                   │  (JSON)       │
                   └───────────────┘



## Contributing
We welcome contributions through:
1. Issue reporting
2. Feature requests
3. Code contributions
4. Documentation improvements

**Process**:
1. Fork the repository
2. Create feature branch
3. Submit pull request



