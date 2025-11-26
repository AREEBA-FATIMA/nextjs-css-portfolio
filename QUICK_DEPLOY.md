# 🚀 Quick Deployment Guide

## Frontend (Vercel) - 5 Minutes

1. **Push code to GitHub/GitLab**
2. **Go to [vercel.com](https://vercel.com)** → New Project
3. **Import repository** → Set Root Directory: `frontend`
4. **Add Environment Variable:**
   ```
   NEXT_PUBLIC_API_URL = https://your-backend-url/api
   ```
5. **Deploy!** ✅

---

## Backend (AWS Elastic Beanstalk) - 10 Minutes

### Option 1: AWS EB CLI (Recommended)

```bash
# Install EB CLI
pip install awsebcli

# Navigate to backend
cd backend

# Initialize
eb init -p python-3.12 portfolio-backend --region us-east-1

# Create environment
eb create portfolio-backend-env

# Set environment variables
eb setenv SECRET_KEY=$(python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())") \
          DEBUG=False \
          ALLOWED_HOSTS=your-app.elasticbeanstalk.com \
          FRONTEND_URL=https://your-frontend.vercel.app

# Deploy
eb deploy
```

### Option 2: Docker (GitLab/AWS ECS)

```bash
cd backend
docker build -t portfolio-backend .
docker run -p 8000:8000 -e SECRET_KEY=your-key portfolio-backend
```

---

## Environment Variables Quick Reference

### Frontend (Vercel Dashboard)
```
NEXT_PUBLIC_API_URL = https://your-backend-url/api
```

### Backend (AWS EB Dashboard or CLI)
```
SECRET_KEY = (generate with Django command)
DEBUG = False
ALLOWED_HOSTS = your-backend-domain.com
DATABASE_URL = postgresql://user:pass@host:port/db
FRONTEND_URL = https://your-frontend.vercel.app
CORS_ALLOW_ALL = False
```

---

## Generate Django Secret Key

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

---

## Database Setup (AWS RDS)

1. **Create PostgreSQL RDS instance** in AWS Console
2. **Get connection string:** `postgresql://user:pass@host:5432/dbname`
3. **Add to `DATABASE_URL`** environment variable
4. **Run migrations:**
   ```bash
   eb ssh
   python manage.py migrate
   ```

---

## ✅ Post-Deployment Checklist

- [ ] Frontend accessible on Vercel
- [ ] Backend API responding
- [ ] CORS configured (check browser console)
- [ ] Database connected
- [ ] Migrations applied
- [ ] Admin panel working
- [ ] Contact form tested

---

## 🆘 Common Issues

**CORS Error?**
- Add your Vercel URL to `FRONTEND_URL` in backend env vars

**Database Error?**
- Check `DATABASE_URL` format
- Verify RDS security groups allow connections

**Static Files Missing?**
- Run `python manage.py collectstatic` manually via `eb ssh`

---

For detailed guide, see `DEPLOYMENT_GUIDE.md`

