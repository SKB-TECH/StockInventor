const express = require('express');
const router = express.Router();

const { getProductbyid, update_product_page, add_product, getProduct, creatProduct, update_product, delete_product } = require('../controllers/product.controller')

/*product */
router.get('/', getProduct);
router.get('/product/getOneProduct/:id', getProductbyid)
router.post('/product/new_product', creatProduct);
router.post('/product/update/:id', update_product);
router.get('/product/addproduct', add_product);
router.get('/product/update_product_page', update_product_page);
router.get('/product/delete/:id', delete_product);


module.exports = router;