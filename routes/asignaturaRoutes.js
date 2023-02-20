const express = require('express');
const router = express.Router();
const { crearAsignatura, actualizarAsignatura, obtenerAsignatura, obtenerAsignaturas, deleteAsignatura } = require('../controllers/asignaturaController')
router.route("/").post(crearAsignatura).get(obtenerAsignaturas)
router.route('/:id').get(obtenerAsignatura).delete(deleteAsignatura).patch(actualizarAsignatura)
module.exports = router

