# Kaiser Ingeniería - Frontend

Landing page moderna y cotizador para Kaiser Ingeniería.

## 📋 Requisitos

- Node.js 18+
- npm o yarn

## 🚀 Inicio Rápido

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador:
```
http://localhost:3000
```

## 📁 Estructura

```
app/
├── layout.tsx          # Layout principal
├── page.tsx            # Página de inicio
└── globals.css         # Estilos globales

components/
├── Header.tsx          # Navbar
├── Footer.tsx          # Footer
└── sections/
    ├── Hero.tsx        # Sección principal
    ├── Products.tsx    # Productos
    ├── Capabilities.tsx # Servicios
    ├── Clients.tsx     # Clientes
    ├── WhyChooseUs.tsx # Por qué preferirnos
    └── Contact.tsx     # Formulario contacto
```

## 🛠️ Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **React Icons** - Iconografía

## 📝 Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm start        # Servidor producción
npm run lint     # Linter
```

## 🔗 Conexión con Backend

El frontend conecta con el backend en `http://localhost:5000` (configurable).

### Endpoints utilizados:

- `POST /api/contact` - Envío de formulario de contacto
- `POST /api/quoter` - Generación de cotizaciones (próximo)

## 📦 Despliegue

Para desplegar en producción:

```bash
npm run build
npm start
```

## 📄 Licencia

© 2024 Kaiser Ingeniería S.A.
