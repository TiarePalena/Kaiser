#!/bin/bash

# Script de despliegue para Kaiser Frontend
# Uso: ./deploy-frontend.sh

echo "🚀 Iniciando despliegue del Frontend..."

# Detener proceso actual
echo "⏸️  Deteniendo proceso anterior..."
pm2 stop kaiser-frontend 2>/dev/null || true

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Build de Next.js
echo "🔨 Compilando Next.js..."
npm run build

# Verificar compilación
if [ ! -d ".next" ]; then
    echo "❌ Error: La compilación falló"
    exit 1
fi

# Iniciar con PM2
echo "▶️  Iniciando aplicación..."
pm2 start npm --name "kaiser-frontend" -- start --update-env

# Guardar configuración
pm2 save

echo "✅ Frontend desplegado exitosamente!"
echo "📊 Ver logs: pm2 logs kaiser-frontend"
echo "📈 Ver estado: pm2 status"
echo "🌐 Visita: https://kaiseringenieria.cl"
