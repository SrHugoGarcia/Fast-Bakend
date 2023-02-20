const express = require('express');
const router = express.Router();
const { crearProfesor, actualizarProfesor, obtenerProfesor, obtenerProfesores, deleteProfesor} = require('../controllers/profesorController')
router.route('/').post(crearProfesor).get(obtenerProfesores);
router.route('/:id').get(obtenerProfesor).delete(deleteProfesor).patch(actualizarProfesor)

module.exports = router