const express = require('express');
const router = express.Router();
const Curso = require('../models/curso');
const db = require('../config/database')

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
router.get('/cursos',async(req,res)=>{
  try{
    const cursos = await Curso.findAll();
    res.json(cursos);
  }catch(error){
    res.status(500).json({message:error.jessage})
  }
});

router.delete('/alumnos/:id', async(req,res)=>{
  console.log(req.params);
  try{
    db.query(`DELETE FROM cursos WHERE codigo = ${req.params.id}`,(err,results)=>{
      const curso = res.json(results[0]);
      if(curso){
        res.json(curso);
      }else{
        res.status(404).json({message:'Cruso no encontrado'});
      }

    });
  }catch(error){
    res.status(500).json({message: error.message});
  }
})


router.put('/cursos/', async (req, res) => {
  console.log(req.body);
  try {
    //const alumno = await Alumno.update(req.params.id);
    db.query(`UPDATE cursos SET nombre = '${req.body.nombre}', codigo = ${req.body.matricula} WHERE id = ${req.body.id}`, (err, results) => {
      /*if (err) {
        return res.status(500).json({ error: err.message });
      }*/
      const cursos = res.json(results[0]);});
    if (cursos) {
      res.json(cursos);
    } else {
      res.status(404).json({ message: 'Curso no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/cursos/', async (req, res) => {
  console.log(req.body);
  try {
    //const alumno = await Alumno.update(req.params.id);
    db.query(`INSERT INTO cursos(nombre, codigo) VALUES('${req.body.nombre}', ${req.body.codigo})`, (err, results) => {
      /*if (err) {
        return res.status(500).json({ error: err.message });
      }*/
      const cursos = res.json(results[0]);});
    if (cursos) {
      res.json(cursos);
    } else {
      res.status(404).json({ message: 'Alumno no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
