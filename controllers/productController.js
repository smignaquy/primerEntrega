let db = require("../db/dataCarnes");
let models = require('../database/models')

let productController = {
    index : function(req, res){
            //return res.render('productos', {info : db.lista}
            models.Producto.findAll()
            .then(function(productos){
                req.session.Producto = {
                    nombre: productos.nombre,
                    descripcion: productos.descripcion,
                    usuario: productos.usuario_id,
                    fecha_carga: productos.createdAt,
                }
                res.locals.Producto = req.session.Producto
                return res.render('productos', {info: locals.Producto});
            })
            .catch(function(error){
                console.log(error);
            })
        },

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
        return res.render('product', {id : resultado[0].id, nombre : resultado[0].nombre, imagen : resultado[0].imagen, descripcion : resultado[0].descripcion, comentarios : resultado[0].comentarios})
    },

    search: function(req, res){
        return res.render('search-results', buscar = req.query.search)
    },

    agregar: function(req, res){
        return res.render('product-add', {user : db.usuarios[0]})
    },
    //CHEQUEAR
    processAgregar: function(req, res){
        let form = req.body

        let newProduct = {
            nombre : form.nombre,
            imagen : form.imagen,
            nombre_usuario: form.usuario,
            fecha_carga : form.fecha,
        };
        
        models.Usuario.create(newUser)
        .then(function(){
                //console.log();
                // return res.redirect('/edit')
                return res.redirect('/home')
            })
            .catch(function(error){
                console.log(error);
        })  
    }
}

module.exports = productController;