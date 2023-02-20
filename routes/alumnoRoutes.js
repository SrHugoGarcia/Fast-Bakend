const express = require('express');
const router = express.Router();
const { crearAlumno, actualizarAlumno, obtenerAlumno, obtenerAlumnos, deleteAlumno} = require('../controllers/alumnoController')
router.route('/').post(crearAlumno).get(obtenerAlumnos);
router.route('/:id').get(obtenerAlumno).delete(deleteAlumno).patch(actualizarAlumno)

module.exports = router