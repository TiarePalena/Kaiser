# 🏗️ Arquitectura del Proyecto Kaiser Ingeniería

## Diagrama General

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENTE (Navegador)                      │
│                    localhost:3000                           │
└────────────────────────────┬────────────────────────────────┘
                             │
                    HTTP/HTTPS Requests
                    (CORS Habilitado)
                             │
                             ▼
            ┌────────────────────────────────┐
            │     FRONTEND (Next.js)         │
            │     Puerto 3000                │
            │                                │
            │ ┌──────────────────────────┐  │
            │ │   Componentes React      │  │
            │ │  - Header                │  │
            │ │  - Hero                  │  │
            │ │  - Products              │  │
            │ │  - Capabilities          │  │
            │ │  - Clients               │  │
            │ │  - WhyChooseUs           │  │
            │ │  - Contact (Formulario)  │  │
            │ │  - Footer                │  │
            │ └──────────────────────────┘  │
            │                                │
            │ ┌──────────────────────────┐  │
            │ │  Services (Axios)        │  │
            │ │  - api.config.ts         │  │
            │ │  - services.ts           │  │
            │ └──────────────────────────┘  │
            │                                │
            │ ┌──────────────────────────┐  │
            │ │  Tailwind CSS            │  │
            │ │  - Responsive Design     │  │
            │ │  - Color Theme           │  │
            │ └──────────────────────────┘  │
            └────────┬────────────────────────┘
                     │
        HTTP POST/GET Requests
            JSON Data
                     │
                     ▼
            ┌────────────────────────────────┐
            │    BACKEND (Express.js)        │
            │    Puerto 5000                 │
            │                                │
            │ ┌──────────────────────────┐  │
            │ │   Routes                 │  │
            │ │  GET  /api/health        │  │
            │ │  POST /api/contact       │  │
            │ │  POST /api/quoter        │  │
            │ └──────────────────────────┘  │
            │                                │
            │ ┌──────────────────────────┐  │
            │ │  Middleware              │  │
            │ │  - CORS                  │  │
            │ │  - Express.json()        │  │
            │ │  - Error Handler         │  │
            │ └──────────────────────────┘  │
            │                                │
            │ ┌──────────────────────────┐  │
            │ │  Controladores           │  │
            │ │  - contactController     │  │
            │ │  - quoterController      │  │
            │ └──────────────────────────┘  │
            └────────┬────────────────────────┘
                     │
         (Próximo: Base de Datos)
         (Próximo: Email Service)
                     │
         ┌───────────┴────────────┬──────────────┐
         ▼                        ▼              ▼
    Database              SendGrid/Email    Storage
    (MongoDB/            Service           (Archivos)
     PostgreSQL)
```

## Flujo de Contacto (Detallado)

```
1. USUARIO INTERACTÚA
   ▼
   Completa formulario en Contact.tsx
   Ingresa: Nombre, Email, Industria, Mensaje
   
2. VALIDACIÓN FRONTEND
   ▼
   Verificación de campos requeridos
   
3. SUBMIT
   ▼
   handleSubmit() → contactService.sendContact()
   
4. HTTP REQUEST
   ▼
   POST http://localhost:5000/api/contact
   Headers: Content-Type: application/json
   Body: { name, email, industry, message }
   
5. BACKEND RECIBE
   ▼
   Express middleware procesa JSON
   Validación básica
   
6. RESPUESTA
   ▼
   Success: { success: true, message: "..." }
   Error: { error: "..." }
   
7. FEEDBACK USUARIO
   ▼
   Toast/Alert con mensaje
   Limpiar formulario si success
   Mostrar error si falla
```

## Estructura de Datos

### Contact Form
```typescript
{
  name: string;        // "Juan Pérez"
  email: string;       // "juan@empresa.com"
  industry: string;    // "petroquimica" | "mineria" | etc
  message: string;     // Descripción del proyecto
}
```

### API Response
```typescript
{
  success: boolean;
  message: string;
  timestamp?: Date;
  error?: string;
}
```

## Stack por Capa

```
┌─────────────────────────────────────────┐
│         PRESENTACIÓN (Frontend)         │
├─────────────────────────────────────────┤
│  React Components (TSX)                 │
│  Tailwind CSS                           │
│  React Icons                            │
└─────────────────────────────────────────┘
                 △
                 │ Axios
                 │
┌─────────────────────────────────────────┐
│     SERVICIOS (HTTP Client)             │
├─────────────────────────────────────────┤
│  services.ts (ContactService)           │
│  api.config.ts (Endpoints)              │
└─────────────────────────────────────────┘
                 △
                 │ HTTP/REST
                 │
┌─────────────────────────────────────────┐
│       API (Backend/Express)             │
├─────────────────────────────────────────┤
│  Routes (GET, POST, PUT, DELETE)        │
│  Middleware (CORS, JSON)                │
│  Error Handling                         │
└─────────────────────────────────────────┘
                 △
                 │ (Próximo)
                 │
┌─────────────────────────────────────────┐
│      BASE DE DATOS (Future)             │
├─────────────────────────────────────────┤
│  MongoDB o PostgreSQL                   │
│  Models & Schemas                       │
│  Queries                                │
└─────────────────────────────────────────┘
```

## Variables de Entorno

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
│                    └─ Accesible en cliente
└─ Prefijo Next.js para variables públicas
```

### Backend (.env)
```
PORT=5000                          # Puerto del servidor
NODE_ENV=development               # Ambiente
FRONTEND_URL=http://localhost:3000 # Origen permitido CORS
```

## Flujo de Desarrollo

```
1. INICIAR SERVIDORES
   ├─ npm run dev (Frontend) → Puerto 3000
   └─ npm run dev (Backend)  → Puerto 5000

2. DURANTE DESARROLLO
   ├─ Cambios automáticos se recargan
   ├─ TypeScript compila en tiempo real
   └─ Errores aparecen en terminal

3. TESTING MANUAL
   ├─ Navegar a http://localhost:3000
   ├─ Llenar formulario
   ├─ Verificar request en DevTools
   └─ Ver respuesta en Backend logs

4. DESPLIEGUE
   ├─ npm run build (Frontend)
   ├─ npm run build (Backend)
   └─ Deploy a hosts
```

## Checklist de Características

### Frontend ✅
- [x] Header responsive
- [x] Hero section
- [x] Productos
- [x] Servicios
- [x] Clientes
- [x] Ventajas
- [x] Formulario conectado
- [x] Footer
- [x] Mobile-friendly
- [x] TypeScript

### Backend ✅
- [x] Express setup
- [x] CORS configurado
- [x] Endpoints básicos
- [x] Validación
- [x] Error handling
- [x] Environment vars
- [x] TypeScript

### Integraciones ✅
- [x] API conectada
- [x] Formulario funcional
- [x] Feedback usuario
- [x] Validación cliente-servidor

### Próximas Fases ⏳
- [ ] Base de datos
- [ ] Envío de emails
- [ ] Sistema de cotización
- [ ] Admin dashboard
- [ ] Autenticación
- [ ] Pagos (próximo)

---

**Última actualización:** Enero 2026
**Versión:** 1.0.0 (MVP)
**Estado:** ✅ Producción Lista
