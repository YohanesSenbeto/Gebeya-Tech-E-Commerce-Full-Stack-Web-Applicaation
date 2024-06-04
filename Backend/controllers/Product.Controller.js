// controllers/ProductController.js
const ProductService = require('../services/product.service');
console.log(ProductService)


async function searchProducts(req, res) {
    try {
        const { category, query } = req.query;

        console.log(category,query)
        const products = await ProductService.searchProducts(category, query);
console.log('serch result')
        console.log(products)
        res.status(200).json(
            products 
        );
    } catch (error) {
        console.error(error);
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
    getAllProducts
}

