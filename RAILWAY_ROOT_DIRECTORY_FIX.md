# 🚨 Railway Root Directory Fix - Step by Step

## Problem
Railway root directory se build kar raha hai, lekin `backend` folder se build hona chahiye.

## ✅ Solution: Railway Dashboard Mein Root Directory Set Karo

### ⚠️ IMPORTANT: Yeh step zaroori hai!

Railway dashboard mein manually Root Directory set karna hoga. Yeh automatic nahi hota.

---

## 📸 Step-by-Step (With Screenshots Guide)

### Step 1: Railway Dashboard Open Karo
1. https://railway.app pe jao
2. Login karo
3. Apne **project** pe click karo

### Step 2: Service Select Karo
1. Apne **service** (web service) pe click karo
   - Example: `portfolio-backend` service

### Step 3: Settings Tab Open Karo
1. Top menu mein **"Settings"** tab pe click karo
   - Ya service page pe **"Settings"** button dikhega

### Step 4: Root Directory Field Find Karo
1. Settings page scroll karo
2. **"Root Directory"** field dhundho
   - Yeh field **"Build & Deploy"** section mein hoga
   - Ya **"Service Settings"** section mein

### Step 5: Root Directory Set Karo
1. **"Root Directory"** field mein type karo:
   ```
   backend
   ```
   ⚠️ **Important**: Sirf `backend` type karo, `/backend` ya `./backend` nahi

2. **"Save"** button click karo
   - Ya **"Update"** button
   - Ya automatically save ho jayega

### Step 6: Redeploy Karo
1. **"Deployments"** tab pe jao
2. Latest deployment pe **"..."** (three dots) click karo
3. **"Redeploy"** select karo
   Ya
4. Settings page pe hi **"Redeploy"** button click karo

---

## ✅ Verification

Deployment logs mein yeh dikhna chahiye:

```
✓ Detecting Python project in backend/
✓ Found requirements.txt
✓ Installing dependencies
✓ Collecting static files
✓ Running migrations
✓ Starting gunicorn
```

Agar abhi bhi root directory se build ho raha hai, to:
1. Root Directory field verify karo (exactly `backend` hona chahiye)
2. Save button click karo
3. Redeploy karo

---

## 🔄 Alternative: Railway CLI Use Karo

Agar dashboard se kaam nahi kar raha, to Railway CLI use karo:

```bash
# Railway CLI install karo (if not installed)
npm i -g @railway/cli

# Login
railway login

# Project select karo
railway link

# Root directory set karo
railway variables set RAILWAY_ROOT_DIRECTORY=backend

# Deploy
railway up
```

---

## 📝 Files Already Created

Main ne yeh files create kar di hain:
- ✅ `railway.json` (root level) - Build commands with `cd backend`
- ✅ `backend/Procfile` - Start command
- ✅ `backend/nixpacks.toml` - Build config
- ✅ `backend/requirements.txt` - Updated

**Lekin Railway dashboard mein Root Directory manually set karna zaroori hai!**

---

## 🎯 Quick Checklist

- [ ] Railway dashboard open kiya
- [ ] Service select kiya
- [ ] Settings tab open kiya
- [ ] Root Directory field mein `backend` type kiya
- [ ] Save button click kiya
- [ ] Redeploy kiya
- [ ] Build logs check kiye (backend/ se build ho raha hai)

---

**Note**: Root Directory set karne ke baad Railway automatically `backend` folder se build karega! 🎉

