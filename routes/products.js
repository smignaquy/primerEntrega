let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController')

router.get('/', productController.index);

router.get('/todos', productController.todosProductos);

router.get('/id/:id', productController.product);

module.exports = router;