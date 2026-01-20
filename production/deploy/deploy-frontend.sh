#!/bin/bash

# 🚀 Frontend Deployment Script
# Ova skripta će build-ovati i pripremiti frontend za deployment

echo "🚀 Priprema frontend-a za deployment..."

# Instalacija zavisnosti
echo "📦 Instalacija zavisnosti..."
npm install

# Build produkcijske verzije
echo "🔨 Build produkcijske verzije..."
npm run build

# Provera da li je build uspešan
if [ -d "build" ]; then
    echo "✅ Build uspešan! Build folder je kreiran."
    echo "📁 Build folder sadrži:"
    ls -la build/
    
    echo ""
    echo "🌐 Za deployment na Netlify:"
    echo "1. Otvorite https://netlify.com"
    echo "2. Drag & drop 'build' folder"
    echo "3. Sajt je live!"
    
    echo ""
    echo "🌐 Za deployment na Vercel:"
    echo "1. Instalirajte Vercel CLI: npm i -g vercel"
    echo "2. Pokrenite: vercel"
    
else
    echo "❌ Build nije uspešan!"
    exit 1
fi
