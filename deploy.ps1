# Script de despliegue en Azure Static Web Apps

# Configuración
$venvPath = "$PSScriptRoot\.venv\Scripts\python.exe"
$resourceGroup = "rg-react-app"
$appName = "react-app-demo"
$location = "westeurope"
$distFolder = "$PSScriptRoot\dist"

Write-Host "=== Deploying React App to Azure ===" -ForegroundColor Cyan

# 1. Crear grupo de recursos
Write-Host "1. Creando grupo de recursos: $resourceGroup" -ForegroundColor Yellow
& $venvPath -m azure.cli group create --name $resourceGroup --location $location

# 2. Crear Static Web App
Write-Host "2. Creando Static Web App: $appName" -ForegroundColor Yellow
& $venvPath -m azure.cli staticwebapp create `
  --name $appName `
  --resource-group $resourceGroup `
  --location $location `
  --app-location "dist"

# 3. Obtener URL de la app
Write-Host "3. Obteniendo información de la app..." -ForegroundColor Yellow
& $venvPath -m azure.cli staticwebapp show --name $appName --resource-group $resourceGroup

Write-Host "=== Deploy completado ===" -ForegroundColor Green
