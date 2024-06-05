// productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
router.get("/api/search", productController.searchProducts);
router.get("/api/suggestions", productController.getSuggestions);
router.post("/api/addProducts",productController.addProducts);
router.get("/api/getAllProducts", productController.getAllProducts);
module.exports = router;
