const Alumno = require('../models/Alumno');
const { createOne, updateOne, getAll, getOne, deleteOne } = require('./handleFactory');

const crearAlumno = createOne(Alumno);
const actualizarAlumno = updateOne(Alumno);
const obtenerAlumno = getOne(Alumno);
const obtenerAlumnos = getAll(Alumno);
const deleteAlumno = deleteOne(Alumno);

module.exports = {crearAlumno, obtenerAlumno, obtenerAlumnos, deleteAlumno, actualizarAlumno}