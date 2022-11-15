const express = require("express");
const router = express.Router();
const { createSale } = require("../controllers/saleController");

//Crear
router.post('/sale', createSale);

module.exports = router;