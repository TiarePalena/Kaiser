# Kaiser Ingeniería - Backend

API REST para la gestión de contactos y cotizaciones.

## 📋 Requisitos

- Node.js 18+
- npm o yarn

## 🚀 Inicio Rápido

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo `.env`:
```bash
cp .env.example .env
```

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. El servidor estará disponible en:
```
http://localhost:5000
```

## 📁 Estructura

```
src/
├── index.ts        # Punto de entrada
├── routes/         # Rutas (próximo)
├── controllers/    # Controladores (próximo)
├── models/         # Modelos base datos (próximo)
└── middleware/     # Middleware personalizado (próximo)

dist/              # Compilado (producción)
```

## 🛠️ Tecnologías

- **Express.js** - Framework web
- **TypeScript** - Tipado estático
- **CORS** - Control de origen
- **dotenv** - Variables de entorno

## 📝 Scripts

```bash
npm run dev     # Desarrollo con auto-reload
npm run build   # Compilar TypeScript
npm start       # Ejecutar producción
npm run lint    # Linter
```

## 📡 Endpoints

### Health Check
```
GET /api/health
```

### Contacto
```
POST /api/contact
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan@empresa.com",
  "industry": "petroquimica",
  "message": "Mensaje del cliente"
}
```

### Cotizador (próximo)
```
POST /api/quoter
```

## 🔐 Variables de Entorno

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## 📦 Despliegue

```bash
npm run build
npm start
```

## 📄 Licencia

© 2024 Kaiser Ingeniería S.A.
