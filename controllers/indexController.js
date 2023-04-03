let db = require("../db/dataCarnes");

let indexController = {
    home : function(req, res){
            return res.render('index', {info : db.lista}
        )},
    }

module.exports = indexController