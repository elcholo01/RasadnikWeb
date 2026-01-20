#!/bin/bash

# 🐍 Backend Deployment Script
# Ova skripta će pripremiti backend za deployment na Heroku

echo "🐍 Priprema backend-a za deployment..."

# Provera da li je Heroku CLI instaliran
if ! command -v heroku &> /dev/null; then
    echo "❌ Heroku CLI nije instaliran!"
    echo "📥 Instalirajte sa: https://devcenter.heroku.com/articles/heroku-cli"
    exit 1
fi

# Login na Heroku
echo "🔐 Login na Heroku..."
heroku login

# Kreiranje nove Heroku aplikacije
echo "🏗️ Kreiranje Heroku aplikacije..."
read -p "Unesite ime za Heroku aplikaciju: " app_name
heroku create $app_name

# Dodavanje MongoDB addon-a
echo "🗄️ Dodavanje MongoDB addon-a..."
heroku addons:create mongolab:sandbox

# Podešavanje environment varijabli
echo "⚙️ Podešavanje environment varijabli..."
heroku config:set EMAIL_USER="your-email@gmail.com"
heroku config:set EMAIL_PASSWORD="your-app-password"
heroku config:set ADMIN_EMAIL="your-admin-email@gmail.com"
heroku config:set JWT_SECRET="your-secret-key-here"

echo ""
echo "⚠️  VAŽNO: Promenite environment varijable sa vašim stvarnim vrednostima!"
echo "   heroku config:set EMAIL_USER=vaš-email@gmail.com"
echo "   heroku config:set EMAIL_PASSWORD=vaš-app-password"
echo "   heroku config:set ADMIN_EMAIL=vaš-admin-email@gmail.com"

# Deploy na Heroku
echo "🚀 Deploy na Heroku..."
git add .
git commit -m "Deploy backend na Heroku"
git push heroku main

echo ""
echo "✅ Backend je deploy-ovan na Heroku!"
echo "🌐 URL: https://$app_name.herokuapp.com"
echo ""
echo "📧 Za testiranje email funkcionalnosti:"
echo "   curl -X POST https://$app_name.herokuapp.com/api/contact"
