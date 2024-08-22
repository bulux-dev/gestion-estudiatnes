const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Obtener todos los cursos
router.get('/cursos', async (req, res) => {
  try {
    const cursos = await db.query('SELECT * FROM cursos');
    res.json(cursos[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener un curso por ID
router.get('/cursos/:id', async (req, res) => {
  try {
    const curso = await db.query('SELECT * FROM cursos WHERE codigo = ?', [req.params.id]);
    if (curso[0].length > 0) {
      res.json(curso[0][0]);
    } else {
      res.status(404).json({ message: 'Curso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Eliminar un curso por ID
router.delete('/cursos/:id', async (req, res) => {
  try {
    const result = await db.query(`DELETE FROM cursos WHERE id = ${req.params.id}`);
    if (result[0].affectedRows > 0) {
      res.json({ message: 'Curso eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Curso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Actualizar un curso
router.put('/cursos/:id', async (req, res) => {
  const { nombre, codigo } = req.body;
  try {
    const result = await db.query(
      `UPDATE cursos SET nombre = '${req.body.nombre}', codigo = '${req.body.codigo}' WHERE id = ${req.body.id}`)
    if (result[0].affectedRows > 0) {
      res.json({ message: 'Curso actualizado correctamente' });
    } else {
      res.status(404).json({ message: 'Curso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Agregar un nuevo curso
router.post('/cursos', async (req, res) => {
  const { nombre, codigo } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO cursos (nombre, codigo) VALUES (?, ?)',
      [nombre, codigo]
    );
    if (result[0].affectedRows > 0) {
      res.json({ message: 'Curso agregado correctamente', id: result[0].insertId });
    } else {
      res.status(500).json({ message: 'Error al agregar el curso' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
