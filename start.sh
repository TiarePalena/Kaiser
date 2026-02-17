#!/bin/bash

# Script para iniciar ambos servidores
# Uso: bash start.sh

echo "🚀 Kaiser Ingeniería - Iniciando Desarrollo"
echo "==========================================="
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar si las carpetas existen
if [ ! -d "Kaiser-FrontEnd" ] || [ ! -d "Kaiser-BackEnd" ]; then
    echo "${RED}❌ Las carpetas Kaiser-FrontEnd y Kaiser-BackEnd no encontradas${NC}"
    exit 1
fi

# Iniciar Backend en background
echo "${BLUE}📦 Iniciando Backend...${NC}"
cd Kaiser-BackEnd
npm install --silent 2>/dev/null
npm run dev &
BACKEND_PID=$!
cd ..

sleep 2

# Iniciar Frontend
echo "${BLUE}📱 Iniciando Frontend...${NC}"
cd Kaiser-FrontEnd
npm install --silent 2>/dev/null
npm run dev &
FRONTEND_PID=$!
cd ..

sleep 3

echo ""
echo "${GREEN}✅ Servidores iniciados correctamente${NC}"
echo ""
echo "${YELLOW}Frontend: http://localhost:3000${NC}"
echo "${YELLOW}Backend:  http://localhost:5000${NC}"
echo ""
echo "Presiona Ctrl+C para detener los servidores"
echo ""

# Esperar a que termine
wait $BACKEND_PID $FRONTEND_PID
