const express = require('express');
const router = express.Router();
const Curso = require('../models/curso');

// Obtener todos los cursos
router.get('/cursos', async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener un curso por ID
router.get('/cursos/:id', async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
      res.json(curso);
    } else {
      res.status(404).json({ message: 'Curso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
