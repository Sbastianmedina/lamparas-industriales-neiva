# 🎨 SCRIPT DE PERSONALIZACIÓN AUTOMÁTICA - (Windows)
# Uso: Abre PowerShell en la carpeta y ejecuta: .\personalize.ps1

Write-Host "╔═══════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║           🎨 PERSONALIZADOR AUTOMÁTICO DE TIENDA                 ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Pedir información
$WHATSAPP_URL = Read-Host "📱 Tu número WhatsApp (SIN +, ej: 573181234567)"
$WHATSAPP_DISPLAY = Read-Host "📞 Tu WhatsApp (CON +, ej: +57 318 123 4567)"
$STORE_NAME = Read-Host "🏢 Nombre de tu tienda"
$ADDRESS = Read-Host "📍 Tu dirección"
$INSTAGRAM = Read-Host "🌐 Tu Instagram (@usuario)"
$TIKTOK = Read-Host "🎵 Tu TikTok (@usuario)"
$COLOR_HEX = Read-Host "🎨 Color brand hex (ej: f5870f, presiona Enter para naranja)"

# Valores por defecto
if ([string]::IsNullOrEmpty($WHATSAPP_URL)) { $WHATSAPP_URL = "573013991153" }
if ([string]::IsNullOrEmpty($WHATSAPP_DISPLAY)) { $WHATSAPP_DISPLAY = "+57 301 399 1153" }
if ([string]::IsNullOrEmpty($STORE_NAME)) { $STORE_NAME = "Mundiluz" }
if ([string]::IsNullOrEmpty($ADDRESS)) { $ADDRESS = "Calle 79c #11B-17, Bogotá" }
if ([string]::IsNullOrEmpty($INSTAGRAM)) { $INSTAGRAM = "mundiluz" }
if ([string]::IsNullOrEmpty($TIKTOK)) { $TIKTOK = "mundiluz" }
if ([string]::IsNullOrEmpty($COLOR_HEX)) { $COLOR_HEX = "f5870f" }

Write-Host ""
Write-Host "🔄 Reemplazando información en todos los archivos..." -ForegroundColor Yellow
Write-Host ""

# Archivos a modificar
$archivos = @(
    "src/components/layout/Navbar.tsx",
    "src/components/layout/Footer.tsx",
    "src/components/layout/NewsletterForm.tsx",
    "src/components/home/Hero.tsx",
    "src/components/home/CTA.tsx",
    "src/components/cart/CartDrawer.tsx",
    "src/app/producto/[slug]/ProductDetailClient.tsx",
    "src/app/layout.tsx",
    "src/app/page.tsx"
)

foreach ($archivo in $archivos) {
    if (Test-Path $archivo) {
        $contenido = Get-Content $archivo -Raw
        
        # Reemplazos
        $contenido = $contenido -replace "573013991153", $WHATSAPP_URL
        $contenido = $contenido -replace "\+57 301 399 1153", $WHATSAPP_DISPLAY
        $contenido = $contenido -replace "(?<![\w-])Mundiluz(?![\w-])", $STORE_NAME
        $contenido = $contenido -replace "Calle 79c #11B-17", $ADDRESS
        $contenido = $contenido -replace "@mundiluz", "@$INSTAGRAM"
        
        Set-Content $archivo $contenido
        Write-Host "✅ $archivo" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "╔═══════════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                    ✅ ¡PERSONALIZACIÓN COMPLETA!                  ║" -ForegroundColor Green
Write-Host "╚═══════════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "Información actualizada:" -ForegroundColor Cyan
Write-Host "  🏢 Tienda: $STORE_NAME"
Write-Host "  📱 WhatsApp: $WHATSAPP_DISPLAY"
Write-Host "  📍 Dirección: $ADDRESS"
Write-Host "  🌐 Instagram: @$INSTAGRAM"
Write-Host "  🎵 TikTok: @$TIKTOK"
Write-Host ""
Write-Host "Próximos pasos:" -ForegroundColor Yellow
Write-Host "  1. npm run dev"
Write-Host "  2. Abre http://localhost:3000"
Write-Host "  3. Verifica que todo esté correcto"
Write-Host ""
