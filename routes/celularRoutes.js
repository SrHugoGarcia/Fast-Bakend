const express = require('express');
const { createCelular, updateCelular, getAllCelular, getCelular, deleteCelular } = require('../controllers/celularController');
const router = express.Router();

router.route("/").post(createCelular).get(getAllCelular);

router.route("/:id").patch(updateCelular).delete(deleteCelular).get(getCelular);

module.exports = router;