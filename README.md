# MAR Studio Landing Page

Landing page profesional para MAR Studio, orientada a convertir visitas en consultas por WhatsApp.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Luego abrir la URL que muestre Vite, normalmente `http://localhost:5173`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Dónde editar contenido

- WhatsApp: `src/data/siteContent.js`, constante `whatsappUrl`.
- Precios y paquetes: `src/data/siteContent.js`, arreglo `packages`.
- Textos principales, servicios, beneficios, FAQ, tipos de negocio e idiomas: `src/data/siteContent.js`, objeto `siteContent`.
- Colores base: `src/styles.css`, variables dentro de `:root`.
- Modo oscuro: `src/styles.css`, bloque `:root[data-theme="dark"]`.
- Componentes y estructura de secciones: `src/App.jsx`.

## SEO incluido

El archivo `index.html` incluye título, descripción y keywords para búsquedas como páginas web para comercios, páginas web para locales, páginas web para restaurantes, páginas web para cafeterías, diseño web para negocios, landing page para comercios y página web con WhatsApp.
