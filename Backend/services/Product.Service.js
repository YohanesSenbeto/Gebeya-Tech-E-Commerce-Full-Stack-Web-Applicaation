// services/ProductService.js
// Import the query function from the db.config.js file 
const db = require("../config/db.config");

async function getCategoryId(categoryName) {
    const rows = await db.query(
        'SELECT category_id FROM categories WHERE category_name = ?', [categoryName]
    );
    if (rows.length > 0) {
        return rows[0].category_id;
    } else {
        throw new Error(`Category '${categoryName}' not found`);
    }
}

async function searchProducts(category, query) {
    let sql = 'SELECT * FROM products WHERE 1=1';
    const params = [];

    if (category && category !== 'all') {
        sql += ' AND category_id = ?';
        params.push(category);
    }

    if (query) {
        sql += ' AND LOWER(product_name) LIKE ?';
        params.push(`%${query.toLowerCase()}%`);
    }

    const rows= await db.query(sql, params);

    console.log(rows)
    return rows;
}


async function getSuggestions(query) {
    const sql = 'SELECT product_name AS name FROM products WHERE product_name LIKE ? LIMIT 10';
    const results = await db.query(sql, [`%${query}%`]);
    return results.map(row => row.name);
}

async function addProduct(product) {
    console.log(product);
    const { name,
    description,
    category,
    imageLink,
    price,
    inventory,
    tags,
    status } = product;

console.log(
    name,
    description,
    category,
    imageLink,
    price,
    inventory,
    tags,
    status 
     
)

    
    if (!name || !description || !category || !imageLink || !price || !inventory || !status || !tags) {
        throw new Error('One or more required fields are missing.');
    }

    try {
        const category_id = await getCategoryId(category);
        const result = await db.query(
            `INSERT INTO products (product_name, description, category_id, image_url, price, stock, status, tags, created_at) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
            [name, description, category_id, imageLink, price, inventory, status, tags, date.now()]
        );
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getAllProducts() {
    const sqlQuery = `
        SELECT * FROM products
    `;

    try {
        const rows = await db.query(sqlQuery);

        console.log(rows);
        return rows;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
}


module.exports = {
    searchProducts,
    addProduct,
    getAllProducts,
    getSuggestions
};
