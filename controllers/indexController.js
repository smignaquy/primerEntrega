let cortesCarnes = require("../db/dataCarnes");

let indexController = {
    home : function(req, res){
        return res.render('index', {imagen: cortesCarnes.lomo.imagen}
        )},
    }

module.exports = indexController