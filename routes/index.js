let express = require('express');
let router = express.Router();
let indexController = require('../controllers/indexController')

router.get('/home', indexController.home);

module.exports = router;
