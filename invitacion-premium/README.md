# ⚛️ Invitación de Boda Premium - Codebase

Este subdirectorio contiene la aplicación web principal de la invitación interactiva de boda. Está construida usando un stack moderno con **React**, **Vite**, **Tailwind CSS** y **Framer Motion** para animaciones fluidas y elegantes.

---

## 🛠️ Stack Tecnológico

*   **Framework**: [React 18](https://react.dev/)
*   **Herramienta de Construcción**: [Vite](https://vitejs.dev/) (para compilación y recarga en caliente ultra rápida)
*   **Estilos**: [Tailwind CSS v3](https://tailwindcss.com/)
*   **Animaciones**: [Framer Motion](https://www.framer.com/motion/) (utilizado para el sobre en 3D, transiciones fluidas de las secciones e itinerario)
*   **Ruteo**: [React Router DOM v6](https://reactrouter.com/) (manejo de las rutas de los invitados)
*   **Fechas**: [Day.js](https://day.js.org/) (usado para el contador regresivo)

---

## 📁 Arquitectura del Código

La estructura de carpetas bajo `src/` sigue patrones modulares y desacoplados:

*   📂 **`src/components/sections/`**: Componentes lógicos que componen cada sección de la invitación (ej. `Hero.jsx`, `Letter.jsx`, `Countdown.jsx`, `RSVP.jsx`, `Location.jsx`).
*   📂 **`src/components/ui/`**: Componentes de UI atómicos reutilizables e independientes de lógica (ej. indicadores de scroll, decoraciones flotantes).
*   📂 **`src/data/`**:
    *   `wedding.json`: Almacena la información principal de la boda (nombres, fechas, ubicaciones, frase romántica, cuentas bancarias).
    *   `invitados.json`: Base de datos de invitados (`slug` -> `{ nombre, pases }`).
*   📂 **`src/context/`**:
    *   `GuestContext.jsx`: Lee el parámetro `:invitadoId` de la URL e inyecta la información del invitado en el árbol de componentes.
    *   `AudioPlayerContext.jsx`: Controla el estado global de la música de fondo (reproducción automática, muteado, etc.).
*   📂 **`src/styles/`**: Estilos base y configuraciones personalizadas de fuentes y variables de Tailwind.

---

## 🚀 Comandos de npm disponibles

Desde esta carpeta (`invitacion-premium`), puedes ejecutar:

### `npm run dev`
Inicia el servidor de desarrollo local en `http://localhost:5173`.

### `npm run build`
Compila la aplicación para producción en la carpeta `dist/`. Realiza optimizaciones de empaquetado para asegurar cargas rápidas en móviles.

### `npm run preview`
Lanza un servidor local para previsualizar la compilación generada en la carpeta `dist/`.

---

## 💡 Notas para Desarrolladores

### 1. Agregar o Modificar Invitados
Para añadir nuevos invitados personalizados, edita `src/data/invitados.json` siguiendo esta estructura:
```json
"identificador-url": { "nombre": "Nombre a Mostrar", "pases": 2 }
```
El identificador de la URL debe ir en minúsculas y sin caracteres especiales (ej. `familia-gomez`).

### 2. Soporte para URLs limpias en Servidores Estáticos
Para que las URLs directas como `/diego-canche` funcionen al refrescar el navegador en servidores como Vercel o Netlify, asegúrate de mantener el archivo `vercel.json` en la raíz de este subdirectorio.
