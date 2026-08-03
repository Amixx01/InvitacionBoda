# Invitación de Boda Premium - Arquitectura

Esta es una plantilla escalable y reutilizable construida con React, Vite y TailwindCSS.

## Estructura de Carpetas

- **src/assets/**: Contiene recursos estáticos como música, fuentes exclusivas, imágenes y texturas (flores, galería de novios, iconos SVG).
- **src/components/common/**: Componentes genéricos y altamente reutilizables como botones, separadores y modales.
- **src/components/sections/**: Componentes grandes para las secciones principales (Hero, Countdown, Galería, Mesa de Regalos, RSVP).
- **src/components/ui/**: Componentes de interfaz atómicos o primitives que siguen un sistema de diseño estricto.
- **src/hooks/**: Hooks de React personalizados, como `useCountdown` o `useScroll`.
- **src/layouts/**: Componentes que actúan como envoltorio de páginas, controlando la estructura general del sitio, modales globales o el reproductor de música de fondo.
- **src/data/**: Archivos JSON o JS que simulan peticiones o almacenan información de los novios, facilitando cambiar los datos sin tocar componentes para cada nueva invitación.
- **src/animations/**: Configuraciones y variantes de Framer Motion, completamente desacopladas de los componentes visuales para su fácil reutilización.
- **src/styles/**: Estilos globales mediante TailwindCSS y variables de configuración.
- **src/utils/**: Funciones de utilidad y formateo (por ejemplo, dayjs logic).
- **src/pages/**: Las vistas completas principales de la aplicación.
- **src/context/**: Manejadores de estado global (e.g., control del reproductor de sonido, tema).
- **src/constants/**: Variables globales y configuraciones fijas.
