import { useState } from 'react';
import { Container, Box, Button, Card, CardContent, Typography, Stack } from '@mui/material';
import './App.css';

export function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('¡Bienvenido a tu app React en Azure!');

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#0078d4' }}>
          React + Azure Static Web Apps
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Tu aplicación de prueba está funcionando correctamente
        </Typography>
      </Box>

      <Stack spacing={3}>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              🚀 Contador Interactivo
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
              <Typography variant="h3" sx={{ color: '#0078d4', fontWeight: 'bold' }}>
                {count}
              </Typography>
              <Button variant="contained" onClick={() => setCount(count + 1)}>
                Incrementar
              </Button>
              <Button variant="outlined" onClick={() => setCount(0)}>
                Resetear
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              💬 Mensaje Dinámico
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, p: 1, bgcolor: '#f0f0f0', borderRadius: 1 }}>
              {message}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="contained" size="small" onClick={() => setMessage('¡Estás en Azure Static Web Apps!')}>
                Mensaje 1
              </Button>
              <Button variant="contained" size="small" onClick={() => setMessage('¡Deploy listo! 🎉')}>
                Mensaje 2
              </Button>
              <Button variant="outlined" size="small" onClick={() => setMessage('¡Bienvenido a tu app React en Azure!')}>
                Reset
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ boxShadow: 3, bgcolor: '#f5f5f5' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              ✅ Stack Confirmado
            </Typography>
            <Typography variant="body2" component="div">
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>✓ React 18 + TypeScript</li>
                <li>✓ Vite (bundler rápido)</li>
                <li>✓ Material-UI (MUI)</li>
                <li>✓ Configurado para Azure Static Web Apps</li>
                <li>✓ CI/CD automático con GitHub Actions</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>

        <Box sx={{ textAlign: 'center', mt: 4, p: 2, bgcolor: '#e7f3ff', borderRadius: 1 }}>
          <Typography variant="body2" color="textSecondary">
            📖 Próximos pasos: Configurar Azure Static Web Apps y desplegar
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
