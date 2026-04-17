#!/bin/bash

# Script de despliegue para Kaiser Backend
# Uso: ./deploy-backend.sh

echo "🚀 Iniciando despliegue del Backend..."

# Detener proceso actual
echo "⏸️  Deteniendo proceso anterior..."
pm2 stop kaiser-backend 2>/dev/null || true

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install --production

# Compilar TypeScript
echo "🔨 Compilando TypeScript..."
npm run build

# Verificar compilación
if [ ! -d "dist" ]; then
    echo "❌ Error: La compilación falló"
    exit 1
fi

# Iniciar con PM2
echo "▶️  Iniciando aplicación..."
pm2 start dist/index.js --name "kaiser-backend" --update-env

# Guardar configuración
pm2 save

echo "✅ Backend desplegado exitosamente!"
echo "📊 Ver logs: pm2 logs kaiser-backend"
echo "📈 Ver estado: pm2 status"
