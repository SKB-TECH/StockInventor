const express = require('express');
const router = express.Router();

const { getProduct, creatProduct, update_product, delete_product } = require('../controllers/product.controller')

/*product */
router.get('/', getProduct);
router.post('/product/new_product', creatProduct);
router.put('/product/update/:id', update_product);
router.get('/product/delete/:id', delete_product);

module.exports = router;