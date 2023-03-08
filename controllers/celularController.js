const { createOne, updateOne,getOne, getAll, deleteOne } = require('../controllers/handleFactory');
const Celular = require('../models/Celular');

const createCelular = createOne(Celular);

const updateCelular = updateOne(Celular);

const getCelular = getOne(Celular);

const getAllCelular = getAll(Celular);

const deleteCelular = deleteOne(Celular);

module.exports = { createCelular, updateCelular, getCelular, getAllCelular, deleteCelular };