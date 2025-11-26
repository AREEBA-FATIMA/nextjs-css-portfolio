# Virtual Environment Fix Guide

## Problem
Your virtual environment is corrupted - `pyvenv.cfg` file is missing.

## Solution: Recreate Virtual Environment

### Step 1: Find Python Installation

Check if Python is installed on your system:

**Option A: Check Python Launcher**
```powershell
# Try these commands:
python --version
py --version
python3 --version
```

**Option B: Check Common Locations**
- `C:\Users\emp10\AppData\Local\Programs\Python\`
- `C:\Python*\`
- Check Windows Store for Python

### Step 2: Install Python (if not found)

If Python is not installed:
1. Download Python 3.12 from: https://www.python.org/downloads/
2. **IMPORTANT:** Check "Add Python to PATH" during installation
3. Restart your terminal after installation

### Step 3: Create New Virtual Environment

Once Python is available:

```powershell
cd D:\nextjs-css-portfolio\backend

# Remove old venv (if exists)
Remove-Item -Recurse -Force venv -ErrorAction SilentlyContinue

# Create new venv
python -m venv venv
# OR if python doesn't work:
py -3.12 -m venv venv

# Activate venv
.\venv\Scripts\activate

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Run server
python manage.py runserver
```

### Step 4: Verify Installation

```powershell
python --version
# Should show: Python 3.12.x or Python 3.13.x

pip list
# Should show all installed packages
```

## Alternative: Use System Python Directly

If you can't create venv, you can install packages globally (not recommended):

```powershell
pip install -r requirements.txt
python manage.py runserver
```

## Still Having Issues?

1. Make sure Python is in PATH
2. Restart terminal after Python installation
3. Try using `py -3.12` instead of `python`
4. Check if antivirus is blocking venv creation

