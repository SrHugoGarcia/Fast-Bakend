const Asignatura = require('../models/Asignatura');
const {createOne, updateOne, getAll, getOne, deleteOne} = require('./handleFactory');

const crearAsignatura = createOne(Asignatura);
const actualizarAsignatura = updateOne(Asignatura);
const obtenerAsignatura = getOne(Asignatura);
const obtenerAsignaturas = getAll(Asignatura);
const deleteAsignatura = deleteOne(Asignatura)
module.exports = {crearAsignatura, actualizarAsignatura, obtenerAsignatura, obtenerAsignaturas, deleteAsignatura}