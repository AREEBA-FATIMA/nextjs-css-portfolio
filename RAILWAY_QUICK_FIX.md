# 🚨 Railway Build Error - Quick Fix

## Problem
Railway root directory se build kar raha hai, lekin `backend` folder se build hona chahiye.

## ✅ Solution - Railway Dashboard Mein Settings Update Karo

### Step 1: Railway Dashboard Mein Service Settings
1. Railway dashboard mein apne service pe click karo
2. **"Settings"** tab open karo

### Step 2: Root Directory Set Karo
1. **"Root Directory"** field mein type karo:
   ```
   backend
   ```
2. **"Save"** click karo

### Step 3: Build Command (Optional - Auto-detect hoga)
Agar manually set karna ho:
```
pip install -r requirements.txt && python manage.py collectstatic --no-input && python manage.py migrate
```

### Step 4: Start Command
```
gunicorn portfolio_backend.wsgi:application
```

### Step 5: Redeploy
1. **"Deployments"** tab mein jao
2. Latest deployment pe **"Redeploy"** click karo
   Ya
3. **"Settings"** → **"Redeploy"** button

---

## ✅ Files Already Created (GitHub Push Karo)

Main ne yeh files create kar di hain:
- ✅ `backend/Procfile` - Railway ko batata hai ke kaise start karna hai
- ✅ `backend/nixpacks.toml` - Build configuration
- ✅ `backend/requirements.txt` - Updated (gunicorn aur dj-database-url add kiye)

**Important**: In files ko GitHub pe push karo, phir Railway automatically detect kar lega!

---

## 🔄 Quick Steps

1. **GitHub pe push karo:**
   ```bash
   git add .
   git commit -m "Add Railway deployment config"
   git push
   ```

2. **Railway Dashboard:**
   - Service → Settings
   - Root Directory: `backend` ⚠️ (Important!)
   - Save

3. **Redeploy:**
   - Deployments tab → Redeploy

---

## ✅ Expected Result

Build successful hoga aur yeh dikhega:
```
✓ Installing dependencies
✓ Collecting static files
✓ Running migrations
✓ Starting gunicorn
```

---

**Note**: Root Directory set karne ke baad Railway automatically `backend` folder se build karega! 🎉

