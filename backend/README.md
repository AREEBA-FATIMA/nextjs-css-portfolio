# Portfolio Backend (Django REST API)

This is the Django backend for the portfolio website.

## Setup Instructions

1. **Create and activate virtual environment:**
```bash
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/Mac:
source venv/bin/activate
```

2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

3. **Create .env file:**
```bash
# Copy .env.example to .env and update values
SECRET_KEY=your-secret-key-here
DEBUG=True
OPENAI_API_KEY=your-openai-api-key-here
```

4. **Run migrations:**
```bash
python manage.py makemigrations
python manage.py migrate
```

5. **Create superuser:**
```bash
python manage.py createsuperuser
```

6. **Run development server:**
```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000/api/`

## API Endpoints

- `GET /api/profile/active/` - Get active profile
- `GET /api/hero-slides/` - Get all hero slides
- `GET /api/services/` - Get all services
- `GET /api/skills/` - Get all skills
- `GET /api/projects/` - Get all projects
- `POST /api/contact/` - Create contact message
- `GET /api/technical-skills/` - Get all technical skills
- `GET /api/technical-skills/by_category/` - Get skills grouped by category

## Admin Panel

Access the admin panel at `http://localhost:8000/admin/` to manage all data.

## Database

The project uses SQLite by default. For production, update `settings.py` to use PostgreSQL or MySQL.


## AI Agents

This backend includes an optional OpenAI-powered contact analysis agent.

Setup:
1. Set environment variable in `backend/.env`:
```
OPENAI_API_KEY=your-openai-key
```
2. Apply migrations (adds ContactMessageAnalysis):
```
python manage.py makemigrations portfolio_api
python manage.py migrate
```
3. When a contact message is created via `POST /api/contact/`, the agent analyzes it and stores results in `ContactMessageAnalysis` (fails gracefully if no API key).
4. You can re-run analysis for a message:
```
POST /api/contact/{id}/analyze/
```


### Agents API (optional)

- POST `/api/agents/content/generate/`
  - Body: `{}`
  - Returns: `{ hero_slides: [...], seo: {...} }`

- GET `/api/agents/analytics/insights/`
  - Returns: `{ insights: [{title, description}, ...] }`

- GET `/api/agents/recommendations/projects/`
  - Returns: `{ recommendations: [ {title, live_demo_url, ...}, ... ] }`

- POST `/api/agents/email/draft/`
  - Body: `{ name, subject, message }`
  - Returns: `{ subject, body }`

- POST `/api/agents/seo/analyze/`
  - Body: `{ pages: [{path, title, description}] }`
  - Returns: `{ keywords: [], suggestions: [] }`

Notes:
- If `OPENAI_API_KEY` is not set, endpoints return smart fallbacks.
- When the key is set, responses use OpenAI for higher-quality output.

