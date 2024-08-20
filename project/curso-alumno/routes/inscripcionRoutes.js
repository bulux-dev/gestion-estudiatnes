const express = require('express');
const router = express.Router();
const Inscripcion = require('../models/inscripcion'); 

// GET /api/inscripciones
router.get('/', async (req, res) => {
  try {
    const inscripciones = await Inscripcion.findAll();
    res.json(inscripciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/inscripciones
router.post('/', async (req, res) => {
  try {
    const { cursoId, alumnoId } = req.body;
    const nuevaInscripcion = await Inscripcion.create({ cursoId, alumnoId });
    res.status(201).json(nuevaInscripcion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/inscripciones/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const inscripcion = await Inscripcion.destroy({ where: { id } });
    if (inscripcion) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Inscripcion no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
