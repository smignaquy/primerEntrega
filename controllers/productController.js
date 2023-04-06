let db = require("../db/dataCarnes");

let productController = {
    // index : function(req, res){
    //         return res.render('productos', {info : db.lista}
    //     )},

    todosProductos: function(req, res){
            return res.render('productos', {info : db.lista}
        )},

    product: function(req, res){
        let resultado = []
        let info = db.lista
        for (let i = 0; i < info.length; i++){
            if (info[i].id == req.params.id){
                resultado.push(info[i])
            } 
        }
        return res.render('product', {nombre : resultado[0].nombre, imagen : resultado[0].imagen, descripcion : resultado[0].descripcion})
    },

    search: function(req, res){
        return res.render('search-results', buscar = req.query.search)
    },

    agregar: function(req, res){
        return res.render('product-add')
    }
}

module.exports = productController;