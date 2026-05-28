#!/bin/bash

# 🎨 SCRIPT DE PERSONALIZACIÓN AUTOMÁTICA - MUNDILUZ
# Uso: bash personalize.sh

echo "╔═══════════════════════════════════════════════════════════════════╗"
echo "║           🎨 PERSONALIZADOR AUTOMÁTICO DE TIENDA                 ║"
echo "╚═══════════════════════════════════════════════════════════════════╝"
echo ""

# Pedir información
read -p "📱 Tu número WhatsApp (SIN +, ej: 573181234567): " WHATSAPP_URL
read -p "📞 Tu WhatsApp (CON +, ej: +57 318 123 4567): " WHATSAPP_DISPLAY
read -p "🏢 Nombre de tu tienda: " STORE_NAME
read -p "📍 Tu dirección: " ADDRESS
read -p "🌐 Tu Instagram (@usuario): " INSTAGRAM
read -p "🎵 Tu TikTok (@usuario): " TIKTOK
read -p "🎨 Color brand hex (ej: #f5870f, presiona Enter para naranja): " COLOR_HEX

# Valores por defecto
WHATSAPP_URL=${WHATSAPP_URL:-573184833330}
WHATSAPP_DISPLAY=${WHATSAPP_DISPLAY:-"+57 318 483 3330"}
STORE_NAME=${STORE_NAME:-"Mundiluz"}
ADDRESS=${ADDRESS:-"Calle 79c #11B-17, Bogotá"}
INSTAGRAM=${INSTAGRAM:-"mundiluz"}
TIKTOK=${TIKTOK:-"mundiluz"}
COLOR_HEX=${COLOR_HEX:-"f5870f"}

echo ""
echo "🔄 Reemplazando información en todos los archivos..."
echo ""

# Reemplazos principales
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i \
  -e "s/573184833330/${WHATSAPP_URL}/g" \
  -e "s/+57 318 483 3330/${WHATSAPP_DISPLAY}/g" \
  -e "s/Mundiluz/${STORE_NAME}/g" \
  -e "s/Calle 79c #11B-17/${ADDRESS}/g" \
  -e "s/@mundiluz/@${INSTAGRAM}/g" \
  {} \;

echo "✅ Cambios principales aplicados"
echo ""

# Cambios en layout
sed -i "s/Mundiluz/${STORE_NAME}/g" src/app/layout.tsx
sed -i "s/Mundiluz/${STORE_NAME}/g" src/components/layout/Navbar.tsx
sed -i "s/Mundiluz/${STORE_NAME}/g" src/components/layout/Footer.tsx

echo "✅ Layout actualizado"
echo ""

# Si quiere cambiar color
if [ "$COLOR_HEX" != "f5870f" ]; then
  echo "🎨 Preparando cambio de color... (Cambio manual en tailwind.config.ts)"
  echo "   Busca '#f5870f' y reemplaza con '#${COLOR_HEX}'"
fi

echo ""
echo "╔═══════════════════════════════════════════════════════════════════╗"
echo "║                    ✅ ¡PERSONALIZACIÓN COMPLETA!                  ║"
echo "╚═══════════════════════════════════════════════════════════════════╝"
echo ""
echo "Información actualizada:"
echo "  🏢 Tienda: ${STORE_NAME}"
echo "  📱 WhatsApp: ${WHATSAPP_DISPLAY}"
echo "  📍 Dirección: ${ADDRESS}"
echo "  🌐 Instagram: @${INSTAGRAM}"
echo "  🎵 TikTok: @${TIKTOK}"
echo ""
echo "Próximos pasos:"
echo "  1. npm run dev"
echo "  2. Abre http://localhost:3000"
echo "  3. Verifica que todo esté correcto"
echo ""
