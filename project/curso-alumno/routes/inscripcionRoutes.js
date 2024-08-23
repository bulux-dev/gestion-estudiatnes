const express = require('express');
const router = express.Router();
const Inscripcion = require('../models/inscripcion'); 
const db = require('../config/database')

// GET /api/inscripciones

//estudiantes en el curso


// Obtener todas las inscripciones
router.get('/', async (req, res) => {
  try {
    const inscripciones = await Inscripcion.findAll();
    res.json(inscripciones.map(inscripcion => ({
      id: inscripcion.id,
      alumnoId: inscripcion.alumnoId,
      cursoId: inscripcion.cursoId,
    })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




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
        where cursos.id = ${req.params.cursoId};
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
/////

router.delete('/curso/:cursoId/alumno/:alumnoId', async (req, res) => {
  try {
    const { cursoId, alumnoId } = req.params;
    const resultado = await Inscripcion.destroy({
      where: { cursoId, alumnoId },
    });

    if (resultado) {
      res.status(200).json({ mensaje: 'Alumno removido exitosamente' });
    } else {
      res.status(404).json({ mensaje: 'Inscripción no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;

/**
 * copiar codigo de gestion de cursos
 * pegar en asignacion de cursos
 * y en lugar de poner el boton de asignar y demas
 * solo asingar boton de ver signadios
 * 
 */