# 📦 Instrukcije za eksport - Hosting servisi

## 🎯 **Šta treba da eksportujete za hosting:**

### **Frontend (React) - Netlify/Vercel:**
```
✅ frontend/build/          # Build folder (preporučeno)
✅ frontend/                # Ili ceo frontend folder
```

### **Backend (Flask) - Heroku/Railway:**
```
✅ backend/                 # Ceo backend folder
✅ backend/index.py         # Glavna aplikacija
✅ backend/routes/          # API rute
✅ backend/models/          # Database modeli
✅ backend/requirements.txt # Python zavisnosti
✅ backend/Procfile         # Heroku konfiguracija
✅ backend/runtime.txt      # Python verzija
```

## 🚀 **Brzi eksport (5 minuta):**

### **1️⃣ Frontend za Netlify:**
```bash
cd frontend
npm run build
# Zatim upload-ujte 'build' folder na Netlify
```

### **2️⃣ Backend za Heroku:**
```bash
# Kopirajte backend/ folder u novi Git repository
git init
git add .
git commit -m "Initial commit"
heroku create your-app-name
git push heroku main
```

## 📁 **Struktura za eksport:**

```
rasadnik-web-production/
├── frontend/
│   ├── build/              # ✅ Za Netlify
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/
│   ├── index.py            # ✅ Za Heroku
│   ├── routes/
│   ├── models/
│   ├── requirements.txt    # ✅ Za Heroku
│   ├── Procfile           # ✅ Za Heroku
│   └── runtime.txt        # ✅ Za Heroku
└── README.md
```

## 🌐 **Hosting opcije:**

### **Frontend:**
- **Netlify** - Drag & drop `build` folder
- **Vercel** - Upload `frontend` folder
- **GitHub Pages** - Push `frontend` folder

### **Backend:**
- **Heroku** - Push `backend` folder
- **Railway** - Upload `backend` folder
- **Render** - Connect `backend` folder

## ⚠️ **VAŽNO - NE eksportujte:**

```
❌ config.ini              # Sadrži lozinke
❌ .env                    # Environment varijable
❌ __pycache__/           # Python cache
❌ node_modules/          # npm paketi
❌ .git/                  # Git istorija
```

## 🔧 **Konfiguracija nakon eksporta:**

### **Frontend:**
```bash
# Kreirajte .env.production
REACT_APP_API_URL=https://your-backend-url.com
```

### **Backend:**
```bash
# Podešite environment varijable na hosting platformi
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=your-admin-email@gmail.com
```

## 📋 **Checklist za eksport:**

- [ ] Frontend build ✅
- [ ] Backend folder ✅
- [ ] Requirements.txt ✅
- [ ] Procfile ✅
- [ ] Runtime.txt ✅
- [ ] Bez config.ini ✅
- [ ] Bez .env fajlova ✅
- [ ] Bez cache foldera ✅

---

**🎯 Preporučeno: Eksportujte `production/` folder - već je sve pripremljeno!**
