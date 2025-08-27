# Mini Landing — Prueba Técnica

Landing responsive accesible con HTML semántico y SCSS modular.

## Requisitos
- Node.js 18+
- (Opcional) Git para desplegar en GitHub Pages

## Ejecutar en local
```bash
npm install
npm run dev
# Abre index.html con Live Server o sirve la carpeta con:
npm run preview
# y visita http://localhost:5173
```

## Build
```bash
npm run build
```

El CSS compilado se genera en `dist/styles.css`.

## Estructura
```
.
├── index.html
├── scss/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _accessibility.scss
│   └── main.scss
├── assets/
│   └── img/
│       ├── card-1.jpg / .webp
│       ├── card-2.jpg / .webp
│       └── card-3.jpg / .webp
├── dist/
│   └── styles.css
└── package.json
```

## Despliegue en GitHub Pages
1. Crea un repositorio nuevo en GitHub (por ejemplo `mini-landing-test`).
2. Inicializa y sube el código:
   ```bash
   git init
   git add .
   git commit -m "feat: mini landing responsive (prueba técnica)"
   git branch -M main
   git remote add origin https://github.com/USUARIO/mini-landing-test.git
   git push -u origin main
   ```
3. En GitHub → Settings → Pages: selecciona la **Branch** `main` y **/ (root)** como carpeta.
4. Espera a que se publique. La URL será algo como: `https://USUARIO.github.io/mini-landing-test/`.

> Si usas GitHub Pages, asegúrate de haber ejecutado `npm run build` para generar `dist/styles.css`.
