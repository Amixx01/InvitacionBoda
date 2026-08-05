# 💍 Invitación de Boda Premium & Personalizada

¡Bienvenidos al repositorio de la invitación digital premium para la boda de **Richard & Mayte**! 🌟

Esta aplicación web interactiva está diseñada con una estética minimalista, elegante y moderna (usando tonos tierra, dorado y carbón), ofreciendo una experiencia cinematográfica desde el primer segundo gracias a la animación del sobre lacrado y la música de fondo.

---

## ✨ Características Principales

*   **✉️ Apertura Cinematográfica**: Sobre interactivo con un sello de lacre realista en 3D que inicia la música de fondo al abrirse.
*   **👤 Base de Datos de Invitados Dinámica**: Rutas personalizadas para cada invitado en base al archivo centralizado `invitados.json`.
*   **🎟️ Pases Asignados**: Visualización inteligente del número de pases asignados al invitado actual en la carta y en la sección de RSVP.
*   **📱 Diseño 100% Responsivo**: Optimizaciones avanzadas para celulares (con overlay a pantalla completa al abrir la carta) y excelente visualización en PC de escritorio.
*   **💬 RSVP Inteligente**: Enlace directo a WhatsApp con un mensaje pre-llenado que incluye el nombre del invitado y su confirmación de pases automática.

---

## 📁 Estructura del Proyecto

El repositorio principal está organizado de la siguiente manera:

```text
InvitacionBoda/
├── README.md                          <-- (Este archivo) Documentación general del proyecto
└── invitacion-premium/                <-- Aplicación React principal
    ├── vercel.json                    <-- Configuración de redirecciones para rutas dinámicas en producción
    ├── package.json                   <-- Dependencias de npm
    └── src/
        ├── main.jsx                   <-- Punto de entrada principal con BrowserRouter
        ├── App.jsx                    <-- Ruteo principal y envoltura con GuestProvider
        ├── data/
        │   ├── wedding.json           <-- Datos globales del evento (Novios, fecha, ubicación, etc.)
        │   └── invitados.json         <-- Base de datos estandarizada de invitados
        ├── context/
        │   ├── AudioPlayerContext.jsx <-- Manejo global de música de fondo
        │   └── GuestContext.jsx       <-- Provee el invitado detectado por la URL
        └── components/
            └── sections/
                ├── Envelope.jsx       <-- Animación interactiva del sobre inicial
                ├── Letter.jsx         <-- La carta interna con el nombre del invitado y pases
                ├── Hero.jsx           <-- Portada principal con nombres y fecha
                ├── Countdown.jsx      <-- Contador regresivo en tiempo real
                └── RSVP.jsx           <-- Botón de confirmación dinámico a WhatsApp
```

---

## 🛠️ Instalación y Desarrollo Local

Sigue estos pasos para correr la invitación en tu computadora:

1.  **Entra a la carpeta de la aplicación**:
    ```bash
    cd invitacion-premium
    ```

2.  **Instala las dependencias**:
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo**:
    ```bash
    npm run dev
    ```

4.  **Abre el navegador** en `http://localhost:5173/` para ver la invitación genérica, o usa alguna ruta personalizada:
    -   `http://localhost:5173/jade-salamanca`
    -   `http://localhost:5173/diego-canche`

---

## ⚙️ ¿Cómo funciona la Personalización?

La aplicación detecta el final de la URL gracias a **React Router** (`/:invitadoId`). 

1.  Cuando se accede a una URL como `/diego-canche`, el hook `useGuest()` busca el id `diego-canche` dentro de `src/data/invitados.json`.
2.  Si lo encuentra, inyecta su nombre y pases en la interfaz de la carta (`Letter.jsx`) y en la confirmación de WhatsApp (`RSVP.jsx`).
3.  Si no hay ID o no existe en el JSON, la app vuelve al modo genérico seguro.

---

## 🚀 Despliegue en Producción (Vercel)

El proyecto cuenta con un archivo `vercel.json` en la raíz de `invitacion-premium`. Este archivo redirige todas las rutas dinámicas al `index.html` para evitar errores 404 al refrescar la página en producción:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

¡Que disfruten el gran día! 🥂🎉
