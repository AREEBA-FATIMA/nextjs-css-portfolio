# Portfolio Website - Next.js + Django

A modern, full-stack portfolio website built with Next.js (frontend) and Django REST Framework (backend).

## 🚀 Features

- **Modern Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **RESTful Backend**: Django REST Framework API
- **Dynamic Content**: All content managed through Django admin panel
- **Responsive Design**: Mobile-first, fully responsive UI

## 📁 Project Structure

```
nextjs-css-portfolio/
├── backend/                 # Django backend
│   ├── portfolio_api/       # Main API app
│   ├── portfolio_backend/   # Django project settings
│   └── requirements.txt     # Python dependencies
├── frontend/                # Next.js frontend
│   ├── src/                 # Application source
│   ├── public/              # Static assets
│   ├── package.json         # Frontend package manifest
│   └── ...                  # Next.js config files
└── SETUP_GUIDE.md           # Detailed setup instructions
```

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- pip

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

3. Run development server:
```bash
npm run dev
```

### Backend Setup

1. Navigate to backend:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file:
```env
SECRET_KEY=your-secret-key
DEBUG=True
```

5. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

6. Create superuser:
```bash
python manage.py createsuperuser
```

7. Run server:
```bash
python manage.py runserver
```

## 📚 Documentation

- **Setup Guide**: See `SETUP_GUIDE.md` for detailed setup instructions
- **Backend API**: See `backend/README.md` for API documentation

## 🔌 API Endpoints

- `GET /api/profile/active/` - Get active profile
- `GET /api/hero-slides/` - Get hero slides
- `GET /api/services/` - Get services
- `GET /api/skills/` - Get skills
- `GET /api/projects/` - Get projects
- `POST /api/contact/` - Submit contact message
- `GET /api/technical-skills/` - Get technical skills

## 🎨 Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- React Icons

### Backend
- Django 5.0
- Django REST Framework
- SQLite (development) / PostgreSQL (production)

## 📝 Admin Panel

Access the Django admin panel at `http://localhost:8000/admin/` to manage:
- Profile information
- Hero slides
- Services
- Skills
- Projects
- Contact messages
- Technical skills

## 🔒 Environment Variables

### Frontend (.env.local)
- `NEXT_PUBLIC_API_URL` - Backend API URL

### Backend (.env)
- `SECRET_KEY` - Django secret key
- `DEBUG` - Debug mode (True/False)

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Set environment variables
2. Connect repository
3. Deploy

### Backend (Heroku/Railway/DigitalOcean)
1. Set environment variables
2. Update `ALLOWED_HOSTS` in settings.py
3. Set `DEBUG=False`
4. Use PostgreSQL database
5. Deploy

## 📄 License

This project is private and proprietary.

## 👤 Author

**Areeba Fatima**
- Full Stack & AI-Driven Web Developer
- Email: areebafatima2457@gmail.com
- LinkedIn: [Areeba Fatima](https://www.linkedin.com/in/areeba-fatima-ali/)

---

Made with ❤️ by Areeba Fatima

