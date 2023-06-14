let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController')

// router.get('/', productController.index);

router.get('/todos', productController.todosProductos);

router.get('/cargar', productController.agregar);
router.post('/cargar', productController.processAgregar);

router.get('/id/:id', productController.product);

router.get('/edit/id/:id', productController.edit)

router.post('/comentar/id/:id', productController.comentar)

// router.get('/?search=', productController.search)

module.exports = router;