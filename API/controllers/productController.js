const router = require('express').Router();
const productModel = require('../models/products/productModel');

router.get('/', productModel.getProducts);
router.get('/:id', productModel.getOneProduct);
router.post('/', productModel.createProduct);
router.patch('/:id', productModel.updateProduct);
router.delete('/:id', productModel.deleteOneProduct);




module.exports = router;