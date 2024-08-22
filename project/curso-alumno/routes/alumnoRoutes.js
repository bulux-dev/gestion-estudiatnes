const express = require('express');
const router = express.Router();
const Alumno = require('../models/alumno');
const db = require('../config/database')
// Obtener todos los alumnos
router.get('/alumnos', async (req, res) => {
  try {
    const alumnos = await Alumno.findAll();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


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
  console.log(req.params);
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

router.delete('/alumnos/:id', async (req, res) => {
  console.log(req.params);
  try {

  db.query(`DELETE FROM alumnos WHERE matricula = ${req.params.id}`, (err, results) => {

    const alumno = res.json(results[0]);});

if (alumno) {
      res.json(alumno);
    } else {
      res.status(404).json({ message: 'Alumno no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/alumnos/', async (req, res) => {
  console.log(req.body);
  try {
    //const alumno = await Alumno.update(req.params.id);
    db.query(`UPDATE alumnos SET nombre = '${req.body.nombre}', matricula = ${req.body.matricula} WHERE id = ${req.body.id}`, (err, results) => {
      /*if (err) {
        return res.status(500).json({ error: err.message });
      }*/
      const alumno = res.json(results[0]);});
    if (alumno) {
      res.json(alumno);
    } else {
      res.status(404).json({ message: 'Alumno no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/alumnos/', async (req, res) => {
  console.log(req.body);
  try {
    //const alumno = await Alumno.update(req.params.id);
    db.query(`INSERT INTO alumnos(nombre, matricula) VALUES('${req.body.nombre}', ${req.body.matricula})`, (err, results) => {
      /*if (err) {
        return res.status(500).json({ error: err.message });
      }*/
      const alumno = res.json(results[0]);});
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
