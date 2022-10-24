const router = require('express').Router()
const productControl = require('../controllers/product.controller')



router.get('/', productControl.Main)


module.exports = router;