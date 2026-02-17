# 📖 Guía Rápida de Uso - Kaiser Ingeniería

## ⚡ Inicio en 5 Minutos

### Terminal 1: Frontend
```bash
cd Kaiser-FrontEnd
npm install
npm run dev
```
✅ Acceder a: **http://localhost:3000**

### Terminal 2: Backend
```bash
cd Kaiser-BackEnd
npm install
npm run dev
```
✅ Acceder a: **http://localhost:5000/api/health**

Debería ver: `{"status":"Server is running","timestamp":"2024-..."}`

---

## 📱 Pantalla Principal

La página se divide en secciones:

### 1. **Header** 🎯
- Logo "K" (Kaiser)
- Menú navegación
- Botón "COTIZAR AHORA"
- Menú hamburguesa en móvil

### 2. **Hero Section** 🏢
- Título principal
- Subtítulo descriptivo
- 2 Botones CTA
- Estadísticas (25+ años, 500+ proyectos, 100% HSE)

### 3. **Productos** 📦
- 4 tarjetas de productos
- Categorías: Petroquímica, Minería, General
- Características destacadas
- Link "Ver Especificaciones"

### 4. **Servicios** 🛠️
- 3 servicios principales:
  - Ingeniería de Detalle
  - Montaje e Instalación
  - Mantenimiento Predictivo

### 5. **Clientes** 🏛️
- 6 logos de clientes
- CODELCO, ENAP, ESCONDIDA, etc.

### 6. **Por Qué Preferirnos** ⭐
- 6 ventajas competitivas
- Iconografía
- Descripción clara

### 7. **Contacto** 💬
- Información de contacto (left)
  - Ubicación
  - Email
  - Teléfono
  - Horario
- Formulario (right)
  - Nombre completo
  - Email
  - Seleccionar industria
  - Mensaje

### 8. **Footer** 📄
- Links de navegación
- Info legal
- Social media

---

## 🎮 Interactividad

### Navbar
- Clic en logo → Home
- Clic en links → Scroll a sección
- "COTIZAR AHORA" → Scroll a formulario
- Menú hamburguesa en móvil

### Botones
- "Explorar Productos" → Scroll a #products
- "Hablar con un Experto" → Scroll a #contact
- "Ver Especificaciones" → (próximo: modal)

### Formulario de Contacto
1. Llenar campos:
   - Nombre completo
   - Email de trabajo
   - Seleccionar industria (dropdown)
   - Mensaje/Requerimiento
2. Clic en "ENVIAR MENSAJE"
3. Ver:
   - ⏳ "Enviando..." mientras se procesa
   - ✅ "Mensaje enviado correctamente" si success
   - ❌ "Error al enviar" si falla

---

## 🔧 Personalización Rápida

### Cambiar Colores
Edit `Kaiser-FrontEnd/tailwind.config.ts`:
```typescript
colors: {
  blue: {
    600: '#2563eb',  // Cambia este hex
    700: '#1d4ed8',
  },
}
```

### Cambiar Textos
Edit componentes en `Kaiser-FrontEnd/components/sections/`:
- Hero.tsx → Título principal
- Products.tsx → Nombres productos
- Contact.tsx → Etiquetas form

### Cambiar Contacto
Edit `Kaiser-FrontEnd/components/sections/Contact.tsx`:
```typescript
const contactInfo = [
  {
    label: 'Ubicación',
    value: 'Tu nueva dirección',  // Cambia aquí
  },
  // ...
]
```

---

## 🐛 Troubleshooting

### Frontend no carga
```bash
# Limpiar cache
rm -rf .next
npm run dev
```

### Backend error 500
```bash
# Ver error en terminal Backend
# Verificar archivo .env existe
cp .env.example .env
```

### CORS error en console
```
Access-Control-Allow-Origin error
```
**Solución:** Backend.env debe tener:
```
FRONTEND_URL=http://localhost:3000
```

### Formulario no envía
```bash
# Verificar backend está corriendo
curl http://localhost:5000/api/health

# Verificar endpoint
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"test","email":"test@test.com","industry":"mineria","message":"test"}'
```

### TypeScript errors
```bash
npm run lint  # Ver errores
# Fix errors en archivos .ts/.tsx
```

---

## 📊 API Endpoints (Testing)

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Enviar Contacto
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan@empresa.com",
    "industry": "petroquimica",
    "message": "Necesito una cotización"
  }'
```

---

## 📁 Archivos Importantes

### Frontend
| Archivo | Propósito |
|---------|----------|
| `app/page.tsx` | Página principal |
| `components/Header.tsx` | Navbar |
| `components/sections/*.tsx` | Secciones |
| `lib/services.ts` | API calls |
| `tailwind.config.ts` | Estilos |

### Backend
| Archivo | Propósito |
|---------|----------|
| `src/index.ts` | Servidor |
| `.env` | Variables |

---

## 🚀 Próximos Cambios Comunes

### Agregar Nueva Sección
1. Crear componente en `components/sections/NewSection.tsx`
2. Importar en `app/page.tsx`
3. Agregar ID para navegación

### Cambiar Logo
1. Edit `components/Header.tsx` línea ~20
2. Reemplazar div "K" por imagen

### Agregar Página Nueva
1. Crear folder `app/nueva-pagina`
2. Crear `page.tsx` dentro
3. Next.js automáticamente ruta a `/nueva-pagina`

### Integrar Base de Datos
1. Install: `npm install mongoose` (MongoDB)
2. Create `src/models/` con schema
3. Edit endpoint en Backend

---

## 💡 Tips & Tricks

✅ **DevTools del navegador** (F12)
- Network tab → Ver requests
- Console → Ver errores

✅ **Hot reload**
- Frontend: Auto-recarga (hot reload)
- Backend: ts-node-dev recarga automático

✅ **Formato de código**
- Prettier está configurado (opcional)
- ESLint verifica errores

✅ **Mobile testing**
- Usar DevTools responsive mode
- O visitar con teléfono local IP

---

## 📞 Contacto de Soporte

**Email:** ventas@kaiseringenieria.cl
**Teléfono:** +56 9 6371 1607
**Horario:** 08:30 – 18:00 (Lunes - Viernes)

---

## 📝 Versión del Documento
- **Versión:** 1.0.0
- **Última actualización:** Enero 2026
- **Estado:** ✅ Completado y Funcional
