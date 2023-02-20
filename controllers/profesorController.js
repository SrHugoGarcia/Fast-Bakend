const Alumno = require('../models/Profesor');
const { createOne, updateOne, getAll, getOne, deleteOne } = require('./handleFactory');

const crearProfesor = createOne(Alumno);
const actualizarProfesor = updateOne(Alumno);
const obtenerProfesor = getOne(Alumno);
const obtenerProfesores = getAll(Alumno);
const deleteProfesor = deleteOne(Alumno);

module.exports = {crearProfesor, obtenerProfesor, obtenerProfesores, deleteProfesor, actualizarProfesor}