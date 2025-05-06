from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import ollama
import uuid
import fitz
import json
import random
import uvicorn
import os
import re

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

documents_db = {}
chat_history_db = {}
dataset_data = []
DATASET_FILE = os.path.join(os.path.dirname(__file__), "dataset2.json")

disease_alias_map = {}

def load_dataset(filename: str):
    try:
        if os.path.exists(filename):
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read()
                if not content:
                    print(f"Dataset file is empty: {filename}")
                    return []
                f.seek(0)
                data = json.load(f)

            for item in data:
                if "disease_name" in item:
                    full_name = item["disease_name"]
                    lower_full_name = full_name.lower()

                    disease_alias_map[lower_full_name] = item

                    match = re.search(r'\((.*?)\)', full_name)
                    if match:
                        abbreviation = match.group(1).strip().lower()
                        if abbreviation:
                            disease_alias_map[abbreviation] = item
                            print(f"Mapped alias '{abbreviation}' for '{full_name}'")

            print(f"Dataset loaded successfully. Total entries: {len(data)}")
            print(f"Alias map contains {len(disease_alias_map)} entries.")
            return data
        else:
            print(f"Dataset file not found: {filename}")
            return []
    except json.JSONDecodeError:
        print(f"Error decoding JSON from dataset file: {filename}. Please check file format.")
        return []
    except Exception as e:
        print(f"Error loading dataset file {filename}: {e}")
        return []

dataset_data = load_dataset(DATASET_FILE)

def extract_text_from_pdf(pdf_file_content: bytes):
    try:
        pdf_document = fitz.open(stream=pdf_file_content, filetype="pdf")
        text = ""
        for page_num in range(pdf_document.page_count):
            page = pdf_document.load_page(page_num)
            text += page.get_text()
        return text
    except Exception as e:
        print(f"Error extracting text from PDF: {e}")
        raise HTTPException(status_code=500, detail="Failed to process PDF file.")

def generate_ollama_response(prompt: str, model: str = "mistral", history: list = None):
    try:
        messages = history if history is not None else []
        messages.append({"role": "user", "content": prompt})

        valid_messages = [msg for msg in messages if isinstance(msg, dict) and 'role' in msg and 'content' in msg]

        response = ollama.chat(model=model, messages=valid_messages)

        if 'message' in response and 'content' in response['message']:
            assistant_response_content = response['message']['content'].strip()
            if assistant_response_content:
                messages.append({"role": "assistant", "content": assistant_response_content})
            return assistant_response_content, messages
        else:
            print(f"Ollama returned unexpected response structure: {response}")
            raise HTTPException(status_code=500, detail="Failed to get valid response from model.")

    except Exception as e:
        print(f"Error communicating with Ollama: {e}")
        if "no such file or directory" in str(e).lower() or "connection refused" in str(e).lower():
            detail = "Ollama server not running or model not found. Please ensure Ollama is running and the 'mistral' model is available."
        else:
            detail = f"Failed to get response from model: {e}"
        raise HTTPException(status_code=500, detail=detail)

class ChatRequest(BaseModel):
    user_input: str
    document_id: str | None = None
    session_id: str | None = None

class ChatResponse(BaseModel):
    response: str
    session_id: str

class UploadResponse(BaseModel):
    document_id: str
    filename: str
    type: str

class Document(BaseModel):
    document_id: str
    filename: str
    type: str

class DocumentsResponse(BaseModel):
    documents: list[Document]

class DiseaseInfoResponse(BaseModel):
    disease: str
    description: str
    symptoms: list[str]
    treatments: list[str]
    additional_notes: list[str] | None = None

class MealPlanResponse(BaseModel):
    disease: str
    description: str
    meal_plans: list[dict]
    additional_notes: list[str] | None = None

@app.get("/random_greeting")
async def get_random_greeting():
    greetings = [
        "Hello! I can help analyze blood test or colonoscopy PDFs or answer general health questions.",
        "Hi there! Upload your medical report or ask me anything about gut health.",
        "Welcome! How can I assist you with your health queries today?",
        "Greetings! Ready to analyze your reports or discuss gut health."
    ]
    return {"greeting": random.choice(greetings)}

@app.post("/upload", response_model=UploadResponse)
async def upload_document(file: UploadFile = File(...), doc_type: str = Form(...)):
    if doc_type not in ["blood_test", "colonoscopy"]:
        raise HTTPException(status_code=400, detail="Invalid document type. Must be 'blood_test' or 'colonoscopy'.")

    file_content = await file.read()
    document_content = extract_text_from_pdf(file_content)
    document_id = str(uuid.uuid4())

    documents_db[document_id] = {
        "filename": file.filename,
        "type": doc_type,
        "content": document_content
    }

    return {"document_id": document_id, "filename": file.filename, "type": doc_type}

@app.get("/documents", response_model=DocumentsResponse)
async def list_documents():
    doc_list = [
        Document(document_id=doc_id, filename=doc_data["filename"], type=doc_data["type"])
        for doc_id, doc_data in documents_db.items()
    ]
    return {"documents": doc_list}

@app.post("/chat", response_model=ChatResponse)
async def chat_with_model(request: ChatRequest):
    session_id = request.session_id if request.session_id else str(uuid.uuid4())
    user_input = request.user_input
    document_id = request.document_id

    chat_history = chat_history_db.get(session_id, [])

    prompt_parts = []
    if document_id and document_id in documents_db:
        doc_data = documents_db[document_id]
        prompt_parts.append(f"You are a medical assistant analyzing a {doc_data['type']} report. Here is the content of the report:\n\n---\n{doc_data['content']}\n---\n\n")
        prompt_parts.append(f"Based on the report and your medical knowledge, respond to the user's question: {user_input}")
    else:
        prompt_parts.append("You are a medical assistant answering general health questions. Respond to the user's question:")
        prompt_parts.append(user_input)

    full_prompt = " ".join(prompt_parts)

    ollama_response_content, updated_history = generate_ollama_response(full_prompt, history=chat_history)

    chat_history_db[session_id] = updated_history

    return {"response": ollama_response_content, "session_id": session_id}

@app.get("/disease_info/{disease_name}", response_model=DiseaseInfoResponse)
async def get_disease_info(disease_name: str):
    lower_input_name = disease_name.lower()

    if lower_input_name in disease_alias_map:
        data = disease_alias_map[lower_input_name]
        print(f"Disease '{disease_name}' found in dataset via alias map.")
        return DiseaseInfoResponse(
            disease=data.get("disease_name", disease_name),
            description=data.get("description", "N/A"),
            symptoms=data.get("symptoms", []),
            treatments=data.get("treatments", []),
            additional_notes=data.get("additional_notes")
        )
    else:
        print(f"Disease '{disease_name}' not found in alias map. Querying model.")
        prompt = f"Provide a brief description, common symptoms, and typical treatments for {disease_name}. Format the response strictly as a JSON object with keys 'disease', 'description', 'symptoms' (list of strings), 'treatments' (list of strings), and optionally 'additional_notes' (list of strings or null). Do not include any text before or after the JSON."

        ollama_response_content, _ = generate_ollama_response(prompt, history=[])

        try:
            disease_data = json.loads(ollama_response_content)

            if not all(key in disease_data for key in ['disease', 'description', 'symptoms', 'treatments']):
                print(f"Model response missing required keys: {ollama_response_content}")
                raise ValueError("Model response missing required keys")

            if not isinstance(disease_data.get('description'), str) or \
               not isinstance(disease_data.get('symptoms'), list) or \
               not isinstance(disease_data.get('treatments'), list):
                print(f"Model response has incorrect types for required keys: {ollama_response_content}")
                raise TypeError("Model response has incorrect types for required keys")

            if disease_data.get('additional_notes') is not None and not isinstance(disease_data.get('additional_notes'), list):
                print(f"Model response has incorrect type for additional_notes: {ollama_response_content}")
                raise TypeError("Model response 'additional_notes' must be a list or null.")

            return DiseaseInfoResponse(**disease_data)

        except json.JSONDecodeError:
            print(f"Model did not return valid JSON for disease info: {ollama_response_content}")
            raise HTTPException(status_code=500, detail="Failed to parse disease information from model (invalid JSON). Model response was: " + ollama_response_content[:200] + "...")
        except (ValueError, TypeError) as e:
            print(f"Model JSON response validation failed: {e} - Input: {ollama_response_content}")
            raise HTTPException(status_code=500, detail=f"Invalid data format or types from model: {e}. Model response was: " + ollama_response_content[:200] + "...")
        except Exception as e:
            print(f"Unexpected error processing disease info: {e}")
            raise HTTPException(status_code=500, detail="An unexpected error occurred.")


@app.get("/meal_plan/{disease_name}", response_model=MealPlanResponse)
async def generate_meal_plan(disease_name: str):
    lower_input_name = disease_name.lower()

    if lower_input_name in disease_alias_map:
        data = disease_alias_map[lower_input_name]
        print(f"Meal plan for '{disease_name}' found in dataset via alias map.")

        meal_plan_items = data.get("meal_plans", [])
        formatted_meal_plan = []

        if meal_plan_items:
            num_items = len(meal_plan_items)
            items_per_meal = max(1, num_items // 4) if num_items > 0 else 0

            day_plan = {
                "day": 1,
                "breakfast": meal_plan_items[:items_per_meal],
                "lunch": meal_plan_items[items_per_meal:items_per_meal*2],
                "dinner": meal_plan_items[items_per_meal*2:items_per_meal*3],
                "snacks": meal_plan_items[items_per_meal*3:],
                "nutrition_notes": "Sample items from local dataset."
            }
            formatted_meal_plan.append(day_plan)

        return MealPlanResponse(
            disease=data.get("disease_name", disease_name),
            description=data.get("description", "N/A"),
            meal_plans=formatted_meal_plan,
            additional_notes=data.get("additional_notes")
        )
    else:
        print(f"Meal plan for '{disease_name}' not found in alias map. Querying model.")
        prompt = f"Generate a 3-day sample meal plan suitable for someone with {disease_name}. Include breakfast, lunch, dinner, and snacks for each day, along with brief nutrition notes. Format the response strictly as a JSON object with keys 'disease', 'description', 'meal_plans' (list of daily plans, each with 'day', 'breakfast', 'lunch', 'dinner', 'snacks' as lists of strings, and 'nutrition_notes'), and optionally 'additional_notes' (list of strings or null). Do not include any text before or after the JSON."

        ollama_response_content, _ = generate_ollama_response(prompt, history=[])

        try:
            meal_plan_data = json.loads(ollama_response_content)

            if not all(key in meal_plan_data for key in ['disease', 'description', 'meal_plans']):
                print(f"Model response missing required keys: {ollama_response_content}")
                raise ValueError("Model response missing required keys")

            if not isinstance(meal_plan_data.get('description'), str) or \
               not isinstance(meal_plan_data.get('meal_plans'), list):
                print(f"Model response has incorrect types for required keys: {ollama_response_content}")
                raise TypeError("Model response has incorrect types for required keys")

            if not all(isinstance(item, dict) for item in meal_plan_data['meal_plans']):
                print(f"Model response 'meal_plans' is not a list of dictionaries: {ollama_response_content}")
                raise TypeError("Model response 'meal_plans' must be a list of dictionaries.")

            if meal_plan_data.get('additional_notes') is not None and not isinstance(meal_plan_data.get('additional_notes'), list):
                print(f"Model response has incorrect type for additional_notes: {ollama_response_content}")
                raise TypeError("Model response 'additional_notes' must be a list or null.")

            return MealPlanResponse(**meal_plan_data)

        except json.JSONDecodeError:
            print(f"Model did not return valid JSON for meal plan: {ollama_response_content}")
            raise HTTPException(status_code=500, detail="Failed to parse meal plan from model (invalid JSON). Model response was: " + ollama_response_content[:200] + "...")
        except (ValueError, TypeError) as e:
            print(f"Model JSON response validation failed: {e} - Input: {ollama_response_content}")
            raise HTTPException(status_code=500, detail=f"Invalid data format or types from model: {e}. Model response was: " + ollama_response_content[:200] + "...")
        except Exception as e:
            print(f"Unexpected error processing meal plan: {e}")
            raise HTTPException(status_code=500, detail="An unexpected error occurred.")


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)