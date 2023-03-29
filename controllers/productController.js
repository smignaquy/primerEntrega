const cortesCarnes = require("../db/dataCarnes");

let productController = {
    index : function(req, res){
        return res.render('index', imagen = cortesCarnes.lomo.imagen)},

    todosProductos: function(req, res){
        res.render('productos')},

    product: function(req, res){
        return res.render('product')
    }
}

module.exports = productController;