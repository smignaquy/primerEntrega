let productController = {
    index : function(req, res){
        return res.render('index')
    },
    todosProductos: function(req, res){
        res.render('productos')
    },
    product: function(req, res){
        return res.render('product')
    }
}

module.exports = productController;