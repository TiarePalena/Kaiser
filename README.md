# Kaiser Ingeniería - Proyecto Completo

Sistema web para Kaiser Ingeniería que incluye landing page y sistema de cotización.

## 🏗️ Estructura del Proyecto

```
Kaiser/
├── Kaiser-FrontEnd/       # Frontend Next.js
├── Kaiser-BackEnd/        # Backend Express + TypeScript
├── DEPLOYMENT-GUIDE.md    # Guía completa de despliegue
├── QUICK-START.md         # Inicio rápido para Hostinger
└── ecosystem.config.js    # Configuración PM2
```

## 🚀 Despliegue en Hostinger

### Opción 1: Inicio Rápido (5 minutos)
Sigue las instrucciones en [QUICK-START.md](QUICK-START.md)

### Opción 2: Guía Completa
Lee la documentación detallada en [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)

## 💻 Desarrollo Local

### Backend
```bash
cd Kaiser-BackEnd
npm install
cp .env.example .env
npm run dev
```

### Frontend
```bash
cd Kaiser-FrontEnd
npm install
cp .env.example .env
npm run dev
```

## 🌐 URLs de Producción

- **Frontend:** https://kaiseringenieria.cl
- **API:** https://api.kaiseringenieria.cl/api
- **Health Check:** https://api.kaiseringenieria.cl/api/health

## 📦 Tecnologías

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express
- TypeScript
- CORS

## 🔄 Actualizar Producción

```bash
# Conectar al servidor
ssh tu-usuario@servidor

# Actualizar backend
cd /ruta/a/Kaiser-BackEnd
./deploy.sh

# Actualizar frontend
cd /ruta/a/Kaiser-FrontEnd
./deploy.sh
```

## 📝 Scripts Disponibles

### Backend
- `npm run dev` - Desarrollo
- `npm run build` - Compilar TypeScript
- `npm start` - Producción
- `./deploy.sh` - Desplegar (en servidor)

### Frontend
- `npm run dev` - Desarrollo
- `npm run build` - Compilar Next.js
- `npm start` - Producción
- `./deploy.sh` - Desplegar (en servidor)

## 🛠️ Gestión con PM2

```bash
pm2 status                  # Ver estado
pm2 logs                    # Ver logs
pm2 restart kaiser-backend  # Reiniciar backend
pm2 restart kaiser-frontend # Reiniciar frontend
pm2 monit                   # Monitor en tiempo real
```

## 📧 Soporte

Para problemas con el despliegue, consulta las secciones de "Solución de Problemas" en los archivos de documentación.

## 📄 Licencia

Propietario: Kaiser Ingeniería
