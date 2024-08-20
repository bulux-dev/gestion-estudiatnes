const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const app = express();
const port = 3000;
const cors = require('cors')

// Importar rutas
const cursoRoutes = require('./routes/cursoRoutes');
const alumnoRoutes = require('./routes/alumnoRoutes');
const inscripcionRoutes = require('./routes/inscripcionRoutes');

app.use(bodyParser.json());

app.use(cors());
// Conectar con la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

// Usar rutas
app.use('/api', cursoRoutes);
app.use('/api', alumnoRoutes);
app.use('/api', inscripcionRoutes);
app.use('/api/inscripciones', inscripcionRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API de Gestión de Cursos, Alumnos e Inscripciones');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// Sincronizar modelos con la base de datos/*
sequelize.sync({ force: false }).then(() => {
  console.log('Modelos sincronizados con la base de datos.');
}).catch(err => {
  console.error('Error al sincronizar los modelos:', err);
});


