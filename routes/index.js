var express = require('express');
const cortesCarnes = require('../db/dataCarnes');
var router = express.Router();


router.get('/home', function(req, res) {
  res.render('index', {imagen : cortesCarnes.lomo.imagen});
});

module.exports = router;
