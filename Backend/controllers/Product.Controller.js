// ProductController.js
const ProductService = require("../services/Product.Service");

// Controller functions
exports.searchProducts = async (req, res) => {
    try {
        const { category, query } = req.query;

        const products = await ProductService.searchProducts(category, query);

        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};
