// productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/Product.Controller");

router.get("/products/search", productController.searchProducts);

module.exports = router;
