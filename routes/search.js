let express = require('express');
let router = express.Router();
let searchController = require('../controllers/searchController')

router.get('/', searchController.busqueda);
// router.get('', searchController.busqueda);

module.exports = router;
