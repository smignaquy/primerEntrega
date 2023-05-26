let express = require('express');
let router = express.Router();
let usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersController.profile);

router.get('/register', usersController.register);

router.post('/register', usersController.store);

router.get('/login', usersController.login);

router.get('/edit', usersController.edit);

module.exports = router;
