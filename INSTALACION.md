# 📦 GUÍA DE INSTALACIÓN Y DESPLIEGUE - MUNDILUZ

## ⚡ INICIO RÁPIDO (3 pasos)

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en desarrollo
npm run dev

# 3. Abrir navegador
http://localhost:3000
```

## 🎯 REQUISITOS PREVIOS

- Node.js 18+ instalado
- npm o yarn
- Editor de código (VS Code recomendado)

## 📥 INSTALACIÓN DETALLADA

### Paso 1: Descomprimir el proyecto
```bash
unzip mundiluz-store-fix.zip
cd mundiluz-project
```

### Paso 2: Instalar dependencias
```bash
npm install
# o
yarn install
```

### Paso 3: Ejecutar en desarrollo
```bash
npm run dev
# o
yarn dev
```

### Paso 4: Abrir en navegador
```
http://localhost:3000
```

## 🚀 DESPLIEGUE EN PRODUCCIÓN

### Opción 1: Vercel (Recomendado - Gratis)

1. Crear cuenta en [Vercel](https://vercel.com)
2. Instalar Vercel CLI:
```bash
npm install -g vercel
```
3. Desplegar:
```bash
vercel
```
4. Seguir las instrucciones en pantalla

**Ventajas:**
- ✅ Despliegue automático
- ✅ CDN global
- ✅ HTTPS gratis
- ✅ Dominio gratis (.vercel.app)
- ✅ Builds optimizados

### Opción 2: Netlify (Gratis)

1. Crear cuenta en [Netlify](https://netlify.com)
2. Construir el proyecto:
```bash
npm run build
```
3. Arrastrar la carpeta `.next` a Netlify
4. O usar Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy
```

### Opción 3: Servidor Propio (VPS)

1. Construir para producción:
```bash
npm run build
```

2. Iniciar servidor:
```bash
npm run start
```

3. Configurar PM2 para mantener activo:
```bash
npm install -g pm2
pm2 start npm --name "mundiluz" -- start
pm2 save
pm2 startup
```

4. Configurar Nginx como reverse proxy:
```nginx
server {
    listen 80;
    server_name mundiluz.com;

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

## 🔧 CONFIGURACIÓN

### Variables de Entorno

Crear archivo `.env.local`:
```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=573013991153
NEXT_PUBLIC_SITE_URL=https://mundiluz.com
```

### Dominio Personalizado

1. Comprar dominio (GoDaddy, Namecheap, etc.)
2. Configurar DNS:
```
Tipo: A
Nombre: @
Valor: [IP de tu servidor o Vercel]

Tipo: CNAME
Nombre: www
Valor: [tu-proyecto].vercel.app
```

## 📊 OPTIMIZACIONES POST-DESPLIEGUE

### 1. Google Analytics
Agregar en `layout.tsx`:
```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### 2. Meta Pixel (Facebook)
```typescript
<Script id="facebook-pixel">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){...}
  `}
</Script>
```

### 3. WhatsApp Widget
Instalar plugin de WhatsApp flotante:
```bash
npm install react-whatsapp-widget
```

### 4. Optimización de Imágenes
Las imágenes ya están optimizadas con Next/Image, pero puedes:
```bash
npm install sharp  # Para mejor compresión
```

## 🛍️ INTEGRAR PASARELA DE PAGO

### Stripe (Internacional)
```bash
npm install @stripe/stripe-js stripe
```

### PayU (Colombia)
```bash
npm install @payu/sdk
```

### Wompi (Colombia)
```bash
npm install @wompi/sdk
```

## 📱 CONFIGURAR REDES SOCIALES

### Instagram Shopping
1. Convertir cuenta a Business
2. Conectar catálogo de Facebook
3. Etiquetar productos en posts

### Facebook Pixel
Agregar código de seguimiento para remarketing

### Google Merchant Center
Subir feed de productos para Google Shopping

## 🔒 SEGURIDAD

### HTTPS
- Vercel/Netlify: Automático
- VPS: Usar Let's Encrypt
```bash
sudo certbot --nginx -d mundiluz.com
```

### Headers de Seguridad
Agregar en `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ];
}
```

## 📈 MONITOREO

### Google Search Console
1. Verificar propiedad
2. Subir sitemap.xml
3. Monitorear indexación

### Analytics
- Google Analytics 4
- Hotjar para heatmaps
- Microsoft Clarity (gratis)

## 🆘 SOLUCIÓN DE PROBLEMAS

### Error: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 ocupado
```bash
# Cambiar puerto
PORT=3001 npm run dev
```

### Build falla
```bash
# Limpiar cache
rm -rf .next
npm run build
```

### Imágenes no cargan
Verificar que estén en `/public/images/products/`

## 📞 SOPORTE

- **Email:** coquecom@hotmail.com
- **WhatsApp:** +57 301 399 1143
- **Documentación Next.js:** https://nextjs.org/docs

## ✅ CHECKLIST PRE-LANZAMIENTO

- [ ] Todas las imágenes optimizadas
- [ ] Textos revisados (sin typos)
- [ ] Links de WhatsApp funcionando
- [ ] Formularios probados
- [ ] Responsive en todos los dispositivos
- [ ] SEO metadata completo
- [ ] Google Analytics configurado
- [ ] Dominio configurado
- [ ] SSL/HTTPS activo
- [ ] Backup configurado

## 🎉 ¡LISTO PARA VENDER!

Tu tienda está 100% funcional y lista para recibir clientes.

**Próximos pasos sugeridos:**
1. Crear contenido en Instagram
2. Configurar Google Ads
3. Email marketing con Mailchimp
4. Programa de referidos
5. Blog de decoración

---

**¡Éxito con tu tienda Mundiluz! 🔥💡**
