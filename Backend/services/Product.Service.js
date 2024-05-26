// ProductService.js
const conn = require("../config/db.config");

exports.searchProducts = async (category, query) => {
    try {
        let products;

        if (category === "all") {
            products = await conn.query(
                "SELECT * FROM products WHERE product_name LIKE ? OR description LIKE ?",
                [`%${query}%`, `%${query}%`]
            );
        } else {
            products = await conn.query(
                "SELECT * FROM products WHERE category = ? AND (product_name LIKE ? OR description LIKE ?)",
                [category, `%${query}%`, `%${query}%`]
            );
        }

        return products;
    } catch (error) {
        console.error(error);
        throw new Error("Error searching products");
    }
};
