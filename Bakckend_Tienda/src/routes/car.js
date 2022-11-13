const express = require("express");
const router = express.Router();
const { addProductCart } = require("../controllers/carControllers")

router.post('/car', addProductCart);