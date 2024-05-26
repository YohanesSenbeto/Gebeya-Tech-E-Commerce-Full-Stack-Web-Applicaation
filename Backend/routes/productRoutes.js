// productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
router.get("/products/search", productController.searchProducts);

module.exports = router;
