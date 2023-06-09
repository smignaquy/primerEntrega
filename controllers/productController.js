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
                return res.render('productos');//{info: locals.Producto}
            })
            .catch(function(error){
                console.log(error);
            })
        },

    todosProductos: function(req, res){
        productos = [];
        //return res.render('productos', {info : db.lista}
        models.Producto.findAll()
            .then(function(producto){
                for(let i=0; i<producto.length; i++){
                    productos.push({
                        id: producto[i].id,
                        nombre: producto[i].nombre,
                        descripcion: producto[i].descripcion,
                        foto: producto[i].foto,
                        usuario_id: producto[i].usuario_id,
                        fecha_carga: producto[i].createdAt,
                    })
                    req.session.Producto = productos;
                }
                res.locals.Producto = req.session.Producto
                //console.log(req.session.Producto)
                //return res.send(producto)
                return res.render('productos');
            })
            .catch(function(error){
                console.log(error);
            })
    },

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
            descripcion: form.descripcion,
            foto : form.imagen,
            usuario_id : req.session.Usuario.id,
        };
        
        //return res.send(newProduct)
        models.Producto.create(newProduct)
        .then(function(){
            console.log();
            return res.redirect('/home')
        })
        .catch(function(error){
            console.log(error);
        })  
    }
}

module.exports = productController;