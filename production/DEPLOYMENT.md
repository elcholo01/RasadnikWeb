# 🚀 Deployment Guide - Rasadnik Web

## 📋 Pre-deployment checklist

- [ ] Frontend build ✅
- [ ] Backend konfiguracija ✅
- [ ] Email setup ✅
- [ ] Database setup ✅
- [ ] CORS konfiguracija ✅

## 🌐 Opcije za hostovanje

### 🎯 **Preporučeno za početnike:**

#### Frontend (React)
- **Netlify** - besplatan, drag & drop deployment
- **Vercel** - besplatan, automatski deployment

#### Backend (Flask)
- **Heroku** - besplatan tier, lako za deployment
- **Railway** - besplatan tier, moderno

### 💰 **Za napredne korisnike:**
- **DigitalOcean** - $5/mesečno
- **AWS EC2** - pay-as-you-go
- **Google Cloud** - $300 kredit

## 🚀 Brzi deployment (5 minuta)

### 1️⃣ **Frontend na Netlify**

1. **Otvorite [Netlify](https://netlify.com)**
2. **Kliknite "New site from Git"**
3. **Povežite vaš GitHub repository**
4. **Build command:** `cd frontend && npm install && npm run build`
5. **Publish directory:** `frontend/build`
6. **Deploy!**

### 2️⃣ **Backend na Heroku**

1. **Instalirajte [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)**
2. **Login:** `heroku login`
3. **Kreirajte app:** `heroku create rasadnik-web-backend`
4. **Dodajte MongoDB:** `heroku addons:create mongolab:sandbox`
5. **Deploy:** `git push heroku main`

## ⚙️ Konfiguracija za produkciju

### Frontend Environment Variables
```bash
# .env.production
REACT_APP_API_URL=https://your-backend-url.herokuapp.com
```

### Backend Environment Variables
```bash
# Heroku config
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set ADMIN_EMAIL=your-admin-email@gmail.com
heroku config:set JWT_SECRET=your-secret-key
```

## 🔧 Troubleshooting

### Frontend ne može da pristupi backend-u
- Proverite CORS konfiguraciju
- Proverite da li je backend URL ispravan
- Proverite da li backend radi

### Email ne radi
- Proverite Gmail App Password
- Proverite da li je 2FA uključena
- Proverite environment varijable

### Database connection error
- Proverite MongoDB URI
- Proverite da li je MongoDB addon dodat na Heroku

## 📱 Testiranje nakon deployment-a

### Frontend
```bash
# Proverite da li sajt radi
curl https://your-site.netlify.app
```

### Backend
```bash
# Testirajte API
curl https://your-backend.herokuapp.com/
curl -X POST https://your-backend.herokuapp.com/api/contact
```

### Email
- Popunite kontakt formu na sajtu
- Proverite da li poruka stiže na admin email

## 🌟 Produkcijske optimizacije

### Frontend
- [ ] Minifikacija CSS/JS ✅
- [ ] Image optimization
- [ ] CDN setup
- [ ] Caching headers

### Backend
- [ ] Gunicorn server ✅
- [ ] Environment variables ✅
- [ ] Logging
- [ ] Monitoring

## 📞 Podrška

Ako imate problema sa deployment-om:
1. Proverite logove na hosting platformi
2. Proverite da li su sve environment varijable podešene
3. Testirajte lokalno pre deployment-a
4. Koristite deployment skripte iz `deploy/` foldera

---

**🎉 Čestitamo! Vaš sajt je sada live na internetu!**
