const express = require('express');
const router = express.Router();
const Alumno = require('../models/alumno');

// Obtener todos los alumnos
router.get('/alumnos', async (req, res) => {
  try {
    const alumnos = await Alumno.findAll();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener un alumno por ID
router.get('/alumnos/:id', async (req, res) => {
  try {
    const alumno = await Alumno.findByPk(req.params.id);
    if (alumno) {
      res.json(alumno);
    } else {
      res.status(404).json({ message: 'Alumno no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
