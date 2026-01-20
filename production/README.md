# 🚀 Rasadnik Web - Hosting Instrukcije

## 📋 Šta treba da eksportujete za hosting:

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

## 🚀 Brzi deployment (5 minuta):

### **1️⃣ Frontend na Netlify:**
1. **Otvorite [Netlify](https://netlify.com)**
2. **Kliknite "New site from Git"**
3. **Povežite vaš GitHub repository**
4. **Build command:** `cd frontend && npm install && npm run build`
5. **Publish directory:** `frontend/build`
6. **Deploy!**

### **2️⃣ Backend na Heroku:**
1. **Instalirajte [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)**
2. **Login:** `heroku login`
3. **Kreirajte app:** `heroku create rasadnik-web-backend`
4. **Dodajte MongoDB:** `heroku addons:create mongolab:sandbox`
5. **Deploy:** `git push heroku main`

## ⚙️ Konfiguracija za produkciju:

### **Frontend Environment Variables:**
```bash
# .env.production
REACT_APP_API_URL=https://your-backend-url.herokuapp.com
```

### **Backend Environment Variables:**
```bash
# Heroku config
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set ADMIN_EMAIL=your-admin-email@gmail.com
heroku config:set JWT_SECRET=your-secret-key
```

## 🌐 Hosting opcije:

### **Frontend:**
- **Netlify** - besplatan, drag & drop deployment
- **Vercel** - besplatan, automatski deployment
- **GitHub Pages** - besplatan, direktno sa Git-a

### **Backend:**
- **Heroku** - besplatan tier, lako za deployment
- **Railway** - besplatan tier, moderno
- **Render** - besplatan tier, full-stack

## 🔧 Troubleshooting:

### **Frontend ne može da pristupi backend-u:**
- Proverite CORS konfiguraciju
- Proverite da li je backend URL ispravan
- Proverite da li backend radi

### **Email ne radi:**
- Proverite Gmail App Password
- Proverite da li je 2FA uključena
- Proverite environment varijable

### **Database connection error:**
- Proverite MongoDB URI
- Proverite da li je MongoDB addon dodat na Heroku

## 📱 Testiranje nakon deployment-a:

### **Frontend:**
```bash
# Proverite da li sajt radi
curl https://your-site.netlify.app
```

### **Backend:**
```bash
# Testirajte API
curl https://your-backend.herokuapp.com/
curl -X POST https://your-backend.herokuapp.com/api/contact
```

### **Email:**
- Popunite kontakt formu na sajtu
- Proverite da li poruka stiže na admin email

## ⚠️ VAŽNO - NE eksportujte:

```
❌ config.ini              # Sadrži lozinke
❌ .env                    # Environment varijable
❌ __pycache__/           # Python cache
❌ node_modules/          # npm paketi
❌ .git/                  # Git istorija
```

## 📋 Checklist za deployment:

- [ ] Frontend build ✅
- [ ] Backend konfiguracija ✅
- [ ] Email setup ✅
- [ ] Database setup ✅
- [ ] CORS konfiguracija ✅
- [ ] Environment varijable ✅

---

**🎉 Čestitamo! Vaš sajt je sada live na internetu!**

**📚 Za detaljne instrukcije pogledajte `DEPLOYMENT.md`**
