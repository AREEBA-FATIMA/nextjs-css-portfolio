# Deployment Guide

This guide will help you deploy the frontend to Vercel and backend to AWS or GitLab.

## 📋 Prerequisites

- GitHub/GitLab account
- Vercel account (free tier available)
- AWS account (or GitLab account for GitLab CI/CD)
- Domain name (optional)

---

## 🚀 Frontend Deployment (Vercel)

### Step 1: Prepare Frontend

1. **Set Environment Variables:**
   - Copy `.env.example` to `.env.local` in the `frontend/` directory
   - Update `NEXT_PUBLIC_API_URL` with your backend URL

```bash
cd frontend
cp .env.example .env.local
```

2. **Update `vercel.json`:**
   - Replace `your-backend-url.aws.com` with your actual backend URL

### Step 2: Deploy to Vercel

**Option A: Via Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub/GitLab repository
4. Set Root Directory to `frontend`
5. Add Environment Variable:
   - `NEXT_PUBLIC_API_URL` = `https://your-backend-url.aws.com/api`
6. Click "Deploy"

**Option B: Via Vercel CLI**
```bash
npm i -g vercel
cd frontend
vercel login
vercel
```

### Step 3: Update Backend CORS

After getting your Vercel URL, update backend CORS settings:
- Add your Vercel URL to `FRONTEND_URL` in backend environment variables

---

## 🔧 Backend Deployment (AWS Elastic Beanstalk)

### Step 1: Install EB CLI

```bash
pip install awsebcli
```

### Step 2: Initialize Elastic Beanstalk

```bash
cd backend
eb init -p python-3.12 portfolio-backend --region us-east-1
```

### Step 3: Create Environment

```bash
eb create portfolio-backend-env
```

### Step 4: Set Environment Variables

```bash
eb setenv SECRET_KEY=your-secret-key \
          DEBUG=False \
          ALLOWED_HOSTS=your-backend.elasticbeanstalk.com \
          DATABASE_URL=postgresql://user:pass@host:port/db \
          FRONTEND_URL=https://your-frontend.vercel.app \
          CORS_ALLOW_ALL=False
```

### Step 5: Deploy

```bash
eb deploy
```

### Step 6: Check Status

```bash
eb status
eb open
```

---

## 🐳 Backend Deployment (Docker - Alternative)

### Option 1: AWS ECS/Fargate

1. **Build and Push to ECR:**
```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin your-account.dkr.ecr.us-east-1.amazonaws.com
docker build -t portfolio-backend .
docker tag portfolio-backend:latest your-account.dkr.ecr.us-east-1.amazonaws.com/portfolio-backend:latest
docker push your-account.dkr.ecr.us-east-1.amazonaws.com/portfolio-backend:latest
```

2. **Create ECS Task Definition** with environment variables
3. **Create ECS Service** and deploy

### Option 2: GitLab Container Registry

1. **Push to GitLab Registry:**
```bash
docker login registry.gitlab.com
docker build -t registry.gitlab.com/your-username/portfolio-backend .
docker push registry.gitlab.com/your-username/portfolio-backend
```

2. **Use GitLab CI/CD** (`.gitlab-ci.yml` already configured)

---

## 🗄️ Database Setup (AWS RDS)

### Create PostgreSQL Database

1. Go to AWS RDS Console
2. Create PostgreSQL instance
3. Get connection string: `postgresql://user:pass@host:port/dbname`
4. Add to `DATABASE_URL` environment variable

### Run Migrations

```bash
eb ssh
source /var/app/venv/*/bin/activate
python manage.py migrate
python manage.py createsuperuser
```

---

## 📝 Environment Variables Checklist

### Frontend (Vercel)
- ✅ `NEXT_PUBLIC_API_URL`

### Backend (AWS/GitLab)
- ✅ `SECRET_KEY` (generate with: `python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"`)
- ✅ `DEBUG=False`
- ✅ `ALLOWED_HOSTS`
- ✅ `DATABASE_URL`
- ✅ `FRONTEND_URL`
- ✅ `CORS_ALLOW_ALL=False`

---

## 🔒 Security Best Practices

1. **Never commit `.env` files**
2. **Use strong SECRET_KEY**
3. **Enable HTTPS only**
4. **Set DEBUG=False in production**
5. **Use environment variables for all secrets**
6. **Enable CORS only for your frontend domain**

---

## 🧪 Testing Deployment

1. **Frontend:** Visit your Vercel URL
2. **Backend:** Test API endpoint: `https://your-backend-url/api/profile/active/`
3. **Check CORS:** Ensure frontend can call backend API

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [AWS Elastic Beanstalk Guide](https://docs.aws.amazon.com/elasticbeanstalk/)
- [Django Deployment Checklist](https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/)

---

## 🆘 Troubleshooting

### CORS Errors
- Check `FRONTEND_URL` in backend environment variables
- Verify frontend URL matches exactly (including https://)

### Database Connection Issues
- Verify `DATABASE_URL` format
- Check security groups allow connections
- Ensure database is publicly accessible (or use VPC)

### Static Files Not Loading
- Run `python manage.py collectstatic` manually
- Check `STATIC_ROOT` setting
- Verify S3/CloudFront configuration if using

---

## ✅ Post-Deployment Checklist

- [ ] Frontend deployed and accessible
- [ ] Backend API responding
- [ ] CORS configured correctly
- [ ] Database migrations applied
- [ ] Environment variables set
- [ ] HTTPS enabled
- [ ] Admin panel accessible
- [ ] Contact form working
- [ ] All API endpoints tested
