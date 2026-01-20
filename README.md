# 🚀 Rasadnik Web - Hosting

## 📋 Eksport za hosting:

### **Frontend:**
```
✅ frontend/build/          # Za Netlify/Vercel
```

### **Backend:**
```
✅ backend/                 # Za Heroku/Railway
```

## 🚀 Deployment:

### **Frontend na Netlify:**
1. Otvorite [Netlify](https://netlify.com)
2. Upload `frontend/build` folder
3. Sajt je live!

### **Backend na Heroku:**
1. Instalirajte Heroku CLI
2. `heroku create rasadnik-web-backend`
3. `git push heroku main`

## ⚙️ Konfiguracija:

### **Frontend:**
```bash
REACT_APP_API_URL=https://your-backend-url.herokuapp.com
```

### **Backend:**
```bash
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set ADMIN_EMAIL=your-admin-email@gmail.com
```

## ⚠️ NE eksportujte:
```
❌ config.ini              # Sadrži lozinke
❌ .env                    # Environment varijable
❌ __pycache__/           # Python cache
❌ node_modules/          # npm paketi
```

## 📋 Checklist:
- [ ] Frontend build ✅
- [ ] Backend konfiguracija ✅
- [ ] Email setup ✅
- [ ] Environment varijable ✅ 
