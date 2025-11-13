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

