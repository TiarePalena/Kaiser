# Quick Start - Despliegue Rápido en Hostinger

## 📋 Requisitos
- Plan VPS, Cloud o Business de Hostinger
- Acceso SSH
- Dominios configurados: `kaiseringenieria.cl` y `api.kaiseringenieria.cl`

## 🚀 Pasos Rápidos

### 1. Conectar por SSH
```bash
ssh u123456789@tu-servidor-ip
```

### 2. Instalar dependencias del sistema
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs nginx certbot python3-certbot-nginx
sudo npm install -g pm2
```

### 3. Subir tu proyecto
Usa FileZilla (SFTP) o Git para subir los archivos a:
```
/home/u123456789/kaiser/
```

### 4. Configurar Backend
```bash
cd /home/u123456789/kaiser/Kaiser-BackEnd
npm install --production
npm run build

# Crear .env
echo "PORT=5000" > .env
echo "NODE_ENV=production" >> .env
echo "FRONTEND_URL=https://kaiseringenieria.cl" >> .env

pm2 start dist/index.js --name kaiser-backend
```

### 5. Configurar Frontend
```bash
cd /home/u123456789/kaiser/Kaiser-FrontEnd
npm install
npm run build

# Crear .env.production
echo "NEXT_PUBLIC_API_URL=https://api.kaiseringenieria.cl/api" > .env.production

pm2 start npm --name kaiser-frontend -- start
pm2 save
pm2 startup
```

### 6. Configurar Nginx
```bash
sudo nano /etc/nginx/sites-available/kaiseringenieria
```

Pega esta configuración:
```nginx
server {
    server_name api.kaiseringenieria.cl;
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    server_name kaiseringenieria.cl www.kaiseringenieria.cl;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/kaiseringenieria /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 7. SSL (HTTPS)
```bash
sudo certbot --nginx -d kaiseringenieria.cl -d www.kaiseringenieria.cl -d api.kaiseringenieria.cl
```

### 8. Verificar
```bash
pm2 status
curl https://api.kaiseringenieria.cl/api/health
```

## ✅ ¡Listo!
Tu sitio debería estar funcionando en:
- 🌐 Frontend: https://kaiseringenieria.cl
- 🔌 API: https://api.kaiseringenieria.cl/api/health

## 🔄 Actualizar en el futuro
```bash
cd /home/u123456789/kaiser/Kaiser-BackEnd
git pull  # o sube archivos nuevos
npm install
npm run build
pm2 restart kaiser-backend

cd ../Kaiser-FrontEnd
git pull
npm install
npm run build
pm2 restart kaiser-frontend
```

## 📊 Comandos útiles
```bash
pm2 logs                    # Ver logs
pm2 monit                   # Monitor en tiempo real
pm2 restart all             # Reiniciar todo
pm2 status                  # Ver estado
```

## ❓ Problemas comunes

**Puerto en uso:**
```bash
sudo lsof -i :5000
sudo lsof -i :3000
```

**Ver logs:**
```bash
pm2 logs kaiser-backend --lines 50
pm2 logs kaiser-frontend --lines 50
```

**Reiniciar Nginx:**
```bash
sudo systemctl restart nginx
sudo systemctl status nginx
```
