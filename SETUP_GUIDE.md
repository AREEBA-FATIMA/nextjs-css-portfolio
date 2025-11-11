# Portfolio Website Setup Guide

Complete setup guide for the Next.js + Django portfolio website.

## Prerequisites

- Node.js 18+ installed
- Python 3.9+ installed
- pip (Python package manager)
- Git

## Frontend Setup (Next.js)

1. **Install dependencies:**
```bash
cd frontend
npm install
```

2. **Create environment file:**
Create a `.env.local` file in the `frontend` directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_GA_ID=your-google-analytics-id-here
```

3. **Run development server:**
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Backend Setup (Django)

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Create and activate virtual environment:**
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. **Install dependencies:**
```bash
pip install -r requirements.txt
```

4. **Create .env file:**
Create a `.env` file in the `backend` directory:
```env
SECRET_KEY=your-secret-key-here-generate-a-random-string
DEBUG=True
OPENAI_API_KEY=your-openai-api-key-here-optional-for-now
```

5. **Run migrations:**
```bash
python manage.py makemigrations
python manage.py migrate
```

6. **Create superuser (for admin panel):**
```bash
python manage.py createsuperuser
```

7. **Run development server:**
```bash
python manage.py runserver
```

The backend API will be available at `http://localhost:8000/api/`
Admin panel: `http://localhost:8000/admin/`

## Initial Data Setup

1. **Access admin panel:**
   - Go to `http://localhost:8000/admin/`
   - Login with your superuser credentials

2. **Add initial data:**
   - **Profile:** Add your profile information
   - **Hero Slides:** Add hero section slides
   - **Services:** Add your services
   - **Skills:** Add your skills with percentages
   - **Projects:** Add your portfolio projects
   - **Technical Skills:** Add technical skills by category

## Google Analytics Setup

1. **Get your Google Analytics ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property or use existing one
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Add to environment:**
   - Update `.env.local` with your `NEXT_PUBLIC_GA_ID`

3. **Verify:**
   - Visit your website
   - Check Google Analytics Real-Time reports

## API Endpoints

### Profile
- `GET /api/profile/active/` - Get active profile

### Hero Slides
- `GET /api/hero-slides/` - Get all hero slides

### Services
- `GET /api/services/` - Get all services

### Skills
- `GET /api/skills/` - Get all skills

### Projects
- `GET /api/projects/` - Get all projects

### Contact
- `POST /api/contact/` - Create contact message
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Hello",
    "message": "Your message here"
  }
  ```

### Technical Skills
- `GET /api/technical-skills/` - Get all technical skills
- `GET /api/technical-skills/by_category/` - Get skills grouped by category

## Development Workflow

1. **Start backend first:**
   ```bash
   cd backend
   python manage.py runserver
   ```

2. **Start frontend in another terminal:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Make changes:**
   - Frontend changes: Hot reload automatically
   - Backend changes: Restart Django server

## Production Deployment

### Frontend (Vercel/Netlify)
1. Set environment variables in deployment platform
2. Build and deploy

### Backend (Heroku/Railway/DigitalOcean)
1. Set environment variables
2. Update `ALLOWED_HOSTS` in `settings.py`
3. Set `DEBUG=False`
4. Use PostgreSQL instead of SQLite
5. Deploy using platform-specific instructions

## Troubleshooting

### CORS Errors
- Ensure `CORS_ALLOWED_ORIGINS` in `backend/portfolio_backend/settings.py` includes your frontend URL

### API Connection Issues
- Check if backend is running on port 8000
- Verify `NEXT_PUBLIC_API_URL` in `.env.local`
- Check browser console for errors

### Database Issues
- Run `python manage.py migrate` again
- Check database file permissions

## Next Steps

1. Add your content via admin panel
2. Customize styling as needed
3. Review AI Agents planning document for future enhancements
4. Set up production environment variables
5. Deploy to hosting platforms

## Support

For issues or questions, refer to:
- Django Documentation: https://docs.djangoproject.com/
- Next.js Documentation: https://nextjs.org/docs
- AI Agents Planning: See `AI_AGENTS_PLANNING.md`

