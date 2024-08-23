const express = require('express');
const router = express.Router();
const Inscripcion = require('../models/inscripcion'); 
const db = require('../config/database')

// GET /api/inscripciones

//estudiantes en el curso
router.get('/cursos/:cursoId/estudiantes', async (req, res) => {
  try {
    const cursoId = req.params.cursoId;

    // Consulta para obtener los estudiantes inscritos en el curso
    const [results] = await db.query(`
      select
        alumnos.nombre as nombre_alumno,
        cursos.nombre as nombre_curso,
        cursos.codigo as codigo_curso
      from
        inscripcions
        inner join alumnos on inscripcions.alumnoId = alumnos.id
        inner join cursos on inscripcions.cursoId = cursos.id
        where cursos.id = 3;
    `);

    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).json({ message: 'No hay estudiantes inscritos en este curso' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;