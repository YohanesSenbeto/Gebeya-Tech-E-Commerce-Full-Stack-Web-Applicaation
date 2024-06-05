// controllers/ProductController.js
const ProductService = require('../services/product.service');
console.log(ProductService)


async function searchProducts(req, res) {
    try {
        // Extract category and query from request query parameters
        const { category, query } = req.query;

        // Log incoming parameters for debugging
        console.log('Received request to search products. Category:', category, 'Query:', query);

        // Call ProductService to search for products based on category and query
        const products = await ProductService.searchProducts(category, query);

        // Log search results for debugging
        console.log('Search results:', products);

        // Send the products as JSON response
        res.status(200).json(products);
    } catch (error) {
        // Log any errors that occur during the search process
        console.error('Error occurred while searching for products:', error);

        // Send a 500 Internal Server Error response with a generic error message
        res.status(500).json({ message: 'Internal server error' });
    }
}
    


async function getSuggestions(req, res) {
    try {
        const { query } = req.query;
        console.log(`Suggestions - Query: ${query}`);
        const suggestions = await ProductService.getSuggestions(query);
        console.log('Suggestions:', suggestions);
        res.status(200).json(suggestions);
    } catch (error) {
        console.error('Error in getSuggestions:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


    async function addProducts(req, res) {
        try {
            const product = req.body;
            console.log(product)

            
            const newProduct = await ProductService.addProduct(product);

            console.log(newProduct)
            res.status(200).json(newProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }


    async function getAllProducts(req, res) {
         try {
            const products = await ProductService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }


module.exports = {
    searchProducts,
    addProducts,
    getAllProducts,
    getSuggestions
}

