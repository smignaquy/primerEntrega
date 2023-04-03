let cortesCarnes = require("../db/dataCarnes");

let productController = {
    index : function(req, res){
        return res.render('productos', {imagen: cortesCarnes.lomo.imagen}
        )},

    todosProductos: function(req, res){
        res.render('productos', {imagen: cortesCarnes.lomo.imagen}
        )},

    product: function(req, res){
        return res.render('product')
    }
}

module.exports = productController;