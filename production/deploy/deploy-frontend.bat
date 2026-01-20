@echo off
echo 🚀 Frontend Deployment Script
echo Ova skripta će build-ovati i pripremiti frontend za deployment
echo.

echo 📦 Instalacija zavisnosti...
call npm install

echo 🔨 Build produkcijske verzije...
call npm run build

echo.
if exist "build" (
    echo ✅ Build uspešan! Build folder je kreiran.
    echo 📁 Build folder sadrži:
    dir build
    
    echo.
    echo 🌐 Za deployment na Netlify:
    echo 1. Otvorite https://netlify.com
    echo 2. Drag ^& drop 'build' folder
    echo 3. Sajt je live!
    
    echo.
    echo 🌐 Za deployment na Vercel:
    echo 1. Instalirajte Vercel CLI: npm i -g vercel
    echo 2. Pokrenite: vercel
    
) else (
    echo ❌ Build nije uspešan!
    pause
    exit /b 1
)

pause
