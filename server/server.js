require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

// Importar rutas
const patientRoutes = require('./routes/patientRoutes');
const attentionRoutes = require('./routes/attentionRoutes');
const nurseRoutes = require('./routes/nurseRoutes');

// Inicializar Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para parsear JSON en las solicitudes

// Configuración de cabeceras
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Rutas básicas
app.get('/', (req, res) => {
  res.json({
    message: 'API de Registro de Atenciones de Enfermería',
    version: '1.0.0'
  });
});

// Rutas de la API
app.use('/api/patients', patientRoutes);
app.use('/api/attentions', attentionRoutes);
app.use('/api/nurses', nurseRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Error interno del servidor',
    message: err.message
  });
});

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Sincronizar modelos con la base de datos
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados con la base de datos');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
};

// Iniciar servidor
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await syncDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();