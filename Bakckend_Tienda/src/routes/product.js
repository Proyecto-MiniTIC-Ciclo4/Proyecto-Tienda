const express = require("express");
const router = express.Router();
const { createProducts, getAllProducts, deleteProducts, updateProducts} = require("../controllers/ProductController")

//Crear
router.post('/product', createProducts);

//Solicitar
router.get('/product', getAllProducts);

//Eliminar
router.delete('/product/:id', deleteProducts);

//Actualizar

router.put('/product/:id',updateProducts);


module.exports = router;