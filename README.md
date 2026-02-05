# React App - Azure Static Web Apps

Aplicación React simple para probar despliegue en Azure Static Web Apps.

## 🚀 Stack Utilizado

- **React 18** + TypeScript
- **Vite** - Bundler rápido
- **Material-UI** - Componentes
- **ESLint + Prettier** - Code quality

## 📋 Requisitos

- Node.js 18+
- npm o yarn

## ⚙️ Instalación

```bash
npm install
```

## 🎯 Desarrollo Local

```bash
npm run dev
```

La app se abrirá en `http://localhost:3000`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos compilados estarán en `dist/`

## ✨ Lint y Formato

```bash
npm run lint      # Verificar código
npm run format    # Formatear código
```

## 🌐 Despliegue en Azure

### Opción 1: Azure Static Web Apps (Recomendado)

1. Crear Static Web App en Azure Portal
2. Conectar repositorio GitHub
3. La app se desplegará automáticamente con cada push a `main`

### Opción 2: Manual

```bash
npm run build
# Subir carpeta dist/ a Azure Blob Storage
```

## 📝 Estructura del Proyecto

```
src/
├── App.tsx          # Componente principal
├── main.tsx         # Entry point
├── App.css
├── index.css
index.html
package.json
vite.config.ts
tsconfig.json
.github/
└── workflows/
    └── deploy.yml   # CI/CD para Azure
```

## 🔗 Referencias

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps)
- [Material-UI](https://mui.com)
