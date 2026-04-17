# Guía de Despliegue en Hostinger - Kaiser Ingeniería

## Requisitos Previos

- Cuenta de Hostinger con plan que soporte Node.js (VPS, Cloud Hosting o Business Plan)
- Acceso SSH a tu servidor
- Git instalado en tu servidor

## Opción 1: Despliegue en VPS Hostinger (Recomendado)

### 1. Configurar Dominios y Subdominios

En el panel de Hostinger:
1. Ve a **Dominios** → Gestionar
2. Configura:
   - `kaiseringenieria.cl` → Dominio principal (Frontend)
   - `api.kaiseringenieria.cl` → Subdominio (Backend)

### 2. Conectar por SSH

```bash
ssh u123456789@your-vps-ip
```

### 3. Instalar Node.js y PM2

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar PM2 (gestor de procesos)
sudo npm install -g pm2

# Verificar instalación
node --version
npm --version
pm2 --version
```

### 4. Clonar el Proyecto

```bash
# Crear directorio para el proyecto
mkdir -p /home/u123456789/kaiser
cd /home/u123456789/kaiser

# Clonar repositorio (o subir archivos por FTP/SFTP)
# Si usas Git:
# git clone tu-repositorio.git

# Si subes manualmente, usa FileZilla o el File Manager de Hostinger
```

### 5. Configurar y Desplegar el Backend

```bash
cd /home/u123456789/kaiser/Kaiser-BackEnd

# Instalar dependencias
npm install --production

# Crear archivo .env
nano .env
```

**Contenido del .env:**
```
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://kaiseringenieria.cl
```

```bash
# Compilar TypeScript
npm run build

# Iniciar con PM2
pm2 start dist/index.js --name "kaiser-backend"

# Guardar configuración PM2
pm2 save
pm2 startup
```

### 6. Configurar y Desplegar el Frontend

```bash
cd /home/u123456789/kaiser/Kaiser-FrontEnd

# Instalar dependencias
npm install

# Crear archivo .env.production
nano .env.production
```

**Contenido del .env.production:**
```
NEXT_PUBLIC_API_URL=https://api.kaiseringenieria.cl/api
```

```bash
# Compilar Next.js
npm run build

# Iniciar con PM2
pm2 start npm --name "kaiser-frontend" -- start
pm2 save
```

### 7. Configurar Nginx como Reverse Proxy

```bash
sudo nano /etc/nginx/sites-available/kaiseringenieria.cl
```

**Configuración Nginx:**
```nginx
# Backend - api.kaiseringenieria.cl
server {
    listen 80;
    server_name api.kaiseringenieria.cl;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Frontend - kaiseringenieria.cl
server {
    listen 80;
    server_name kaiseringenieria.cl www.kaiseringenieria.cl;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Habilitar sitio
sudo ln -s /etc/nginx/sites-available/kaiseringenieria.cl /etc/nginx/sites-enabled/

# Verificar configuración
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

### 8. Instalar Certificados SSL (HTTPS)

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtener certificados SSL
sudo certbot --nginx -d kaiseringenieria.cl -d www.kaiseringenieria.cl
sudo certbot --nginx -d api.kaiseringenieria.cl

# Verificar renovación automática
sudo certbot renew --dry-run
```

### 9. Verificar Estado de los Servicios

```bash
# Ver procesos PM2
pm2 status
pm2 logs

# Ver logs específicos
pm2 logs kaiser-backend
pm2 logs kaiser-frontend

# Reiniciar servicios si es necesario
pm2 restart kaiser-backend
pm2 restart kaiser-frontend
```

## Opción 2: Despliegue en Shared Hosting con Node.js

Si tienes un plan Business o Premium con soporte Node.js:

### 1. Subir Archivos

- Usa el **File Manager** de Hostinger o **FTP/SFTP**
- Sube `Kaiser-BackEnd` a `public_html/api/`
- Sube `Kaiser-FrontEnd` a `public_html/`

### 2. Configurar Node.js App en Hostinger

1. Ve al panel de Hostinger → **Sitio web** → **Node.js**
2. Crea nueva aplicación:
   - **Ruta:** `/public_html/api/Kaiser-BackEnd`
   - **Comando de inicio:** `npm start`
   - **Puerto:** 5000
   - **Versión Node.js:** 18.x

3. Repite para el Frontend:
   - **Ruta:** `/public_html/Kaiser-FrontEnd`
   - **Comando de inicio:** `npm start`
   - **Puerto:** 3000

### 3. Variables de Entorno

En cada aplicación Node.js, añade las variables de entorno correspondientes (.env.production).

## Comandos Útiles Post-Despliegue

```bash
# Actualizar código
cd /home/u123456789/kaiser
git pull origin main

# Actualizar backend
cd Kaiser-BackEnd
npm install
npm run build
pm2 restart kaiser-backend

# Actualizar frontend
cd ../Kaiser-FrontEnd
npm install
npm run build
pm2 restart kaiser-frontend

# Monitorear recursos
pm2 monit

# Ver logs en tiempo real
pm2 logs --lines 100
```

## Checklist Final

- [ ] Dominios configurados y apuntando al servidor
- [ ] Certificados SSL instalados y funcionando
- [ ] Backend respondiendo en https://api.kaiseringenieria.cl/api/health
- [ ] Frontend cargando en https://kaiseringenieria.cl
- [ ] Formulario de contacto funcionando
- [ ] Cotizador enviando datos correctamente
- [ ] PM2 configurado para auto-inicio
- [ ] Nginx configurado correctamente
- [ ] Logs funcionando correctamente

## Solución de Problemas

### El backend no responde
```bash
pm2 logs kaiser-backend
sudo systemctl status nginx
sudo netstat -tulpn | grep :5000
```

### El frontend no carga
```bash
pm2 logs kaiser-frontend
curl http://localhost:3000
```

### Problemas con CORS
Verifica que `FRONTEND_URL` en el backend .env coincida con tu dominio.

### Puerto en uso
```bash
sudo lsof -i :5000
sudo lsof -i :3000
```

## Soporte

Para más ayuda:
- Documentación Hostinger: https://www.hostinger.com/tutorials/
- Soporte Hostinger: chat en vivo 24/7

---

**Nota:** Guarda credenciales de SSH, contraseñas de bases de datos y otros secretos de forma segura.
