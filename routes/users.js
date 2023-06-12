let express = require('express');
let router = express.Router();
let usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/id/:id', usersController.profile);

router.get('/register', usersController.register);
router.post('/register', usersController.store);

router.get('/login', usersController.login);
router.post('/login', usersController.procesarLogin)

router.get('/edit', usersController.edit);

router.post('/logout', usersController.logout)

module.exports = router;
