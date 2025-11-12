const express = require('express');
const { createProduct } = require('../products/controller.product');
const productRoutes = express.Router();

productRoutes.post('/', createProduct);

module.exports = productRoutes;