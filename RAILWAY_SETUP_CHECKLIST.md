# ✅ Railway Build Setup - Complete Checklist

## 📁 Files Ready (All Correct)

- ✅ `backend/nixpacks.toml` - Python 3.12 setup
- ✅ `backend/Procfile` - Start command
- ✅ `backend/runtime.txt` - Python version
- ✅ `backend/requirements.txt` - All dependencies (gunicorn, dj-database-url included)
- ✅ `railway.json` - Root level config

---

## 🎯 Railway Dashboard Mein Ye Steps Follow Karo

### Step 1: Root Directory Set Karo (MOST IMPORTANT!)
1. Railway Dashboard → Apne **service** pe click karo
2. **"Settings"** tab open karo
3. **"Root Directory"** field dhundho
4. Type karo: `backend`
5. **"Save"** click karo

### Step 2: Environment Variables Add Karo
**"Variables"** tab mein yeh add karo:

1. **SECRET_KEY**:
   ```bash
   # Terminal mein run karo:
   python -c "import secrets; print(secrets.token_urlsafe(50))"
   ```
   Output copy karke paste karo

2. **DEBUG**: `False`

3. **ALLOWED_HOSTS**: 
   - Railway ka domain (auto-generate hoga)
   - Ya `*` use karo (development ke liye)

4. **FRONTEND_URL**: 
   - Apne Vercel frontend ka URL
   - Example: `https://your-app.vercel.app`

5. **DATABASE_URL**: 
   - Railway PostgreSQL database se automatically add hoga
   - Verify karo ke add ho gaya hai

### Step 3: Redeploy
1. **"Deployments"** tab
2. **"Redeploy"** click karo

---

## ✅ Expected Build Output

```
✓ Detecting Python project in backend/
✓ Found requirements.txt
✓ Installing Python 3.12
✓ Installing dependencies...
✓ Collecting static files
✓ Running migrations
✓ Starting gunicorn
```

---

## 🐛 Agar Error Aaye

### Error: "pip: command not found"
**Solution**: Root Directory `backend` set karo (Step 1)

### Error: "Module not found"
**Solution**: `requirements.txt` verify karo, sab dependencies add hain

### Error: "Database connection failed"
**Solution**: `DATABASE_URL` environment variable check karo

---

## 📝 Important Notes

1. **Root Directory set karna zaroori hai** - Yeh sabse important step hai!
2. Environment variables add karna zaroori hai
3. PostgreSQL database pehle create karo (Railway automatically karega)

---

**Ab sab ready hai! Railway dashboard mein Root Directory set karo aur deploy karo! 🚀**

