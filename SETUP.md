# Kaiser Ingeniería - Guía de Instalación y Desarrollo

## 📖 Descripción del Proyecto

Página web moderna separada en **Frontend** (Next.js) y **Backend** (Node.js/Express) para Kaiser Ingeniería con funcionalidades de:
- Landing page responsiva
- Formulario de contacto
- Sistema de cotizaciones (próximo)

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** - React framework con SSR
- **TypeScript** - Lenguaje tipado
- **Tailwind CSS** - Utilidades CSS
- **React Icons** - Iconografía

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Lenguaje tipado
- **CORS** - Control de origen cruzado

## 📦 Instalación

### 1. Frontend (Kaiser-FrontEnd)

```bash
cd Kaiser-FrontEnd
npm install
npm run dev
```

Acceder a: `http://localhost:3000`

### 2. Backend (Kaiser-BackEnd)

```bash
cd Kaiser-BackEnd
npm install
cp .env.example .env
npm run dev
```

Acceder a: `http://localhost:5000`

## 📁 Estructura Final

```
Kaiser/
├── Kaiser-FrontEnd/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── sections/
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── next.config.js
│
└── Kaiser-BackEnd/
    ├── src/
    │   └── index.ts
    ├── package.json
    ├── tsconfig.json
    └── .env.example
```

## 🎨 Características Frontend

✅ **Header** - Navbar responsive con navegación
✅ **Hero Section** - Banner principal con CTA
✅ **Productos** - Catálogo de servicios
✅ **Capacidades** - Servicios principales
✅ **Clientes** - Logos de empresas conocidas
✅ **Por qué preferirnos** - Ventajas competitivas
✅ **Contacto** - Formulario + información
✅ **Footer** - Enlaces y datos corporativos

## 🚀 API Backend

### Endpoints Disponibles

- `GET /api/health` - Verificar servidor
- `POST /api/contact` - Recibir contactos
- `POST /api/quoter` - Cotizaciones (próximo)

## 🎯 Próximos Pasos

1. **Conectar formulario** - Link Frontend-Backend
2. **Implementar cotizador** - Lógica de cotizaciones
3. **Base de datos** - MongoDB o PostgreSQL
4. **Autenticación** - JWT para admin
5. **Emails** - SendGrid o similar
6. **Despliegue** - Vercel (Frontend) + Heroku/Railway (Backend)

## 💡 Mejoras Estéticas Implementadas

✨ Color scheme moderno (Azul + Gris oscuro)
✨ Tipografía clara y legible
✨ Espaciado consistente
✨ Animaciones sutiles
✨ Diseño responsive mobile-first
✨ Iconografía profesional
✨ Formularios intuitivos
✨ CTAs bien posicionados

## 📝 Notas

- Frontend usa `http://localhost:3000`
- Backend usa `http://localhost:5000`
- CORS habilitado para comunicación entre servidores
- Variables de entorno en `.env` para cada proyecto

¡Listo! Tienes una arquitectura moderna y escalable. 🚀
