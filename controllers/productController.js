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
        id = req.params.id
        comentarios = db.lista.comentarios
        
        // let filtro = {
        //     where: [{
        //         id: id
        //     }]
        // }
        //return res.render('productos', {info : db.lista}
        // let resultado = []
        // let info = db.lista
        // for (let i = 0; i < info.length; i++){
        //     if (info[i].id == id){
        //         resultado.push(info[i])
        //     } 
        //     comentarios = resultado[0].comentarios
        comentarios = []
        models.Comentario.findAll()
        .then(function(comentario){
            for(let i=0; i<comentario.length; i++){
                for(let i = 0; i < locals.Usuario.length; i++){
                    if(comentario.usuario_id == locals.Usuario.id){
                        usuario = locals.Usuario[i].id
                        nombre_usuario = locals.Usuario[i].nombre
                        foto_perfil = locals.Usuario[i].foto
                    }
                }
                if (comentario.producto_id == id){
                    comentarios.push({
                        id: comentario.id,
                        usuario_id: usuario,
                        nombre: nombre_usuario,
                        foto: foto_perfil
                    })
                }
            }
        })
        .catch(function(error){
            console.log(error);
        })
        return res.send(comentarios)

        models.Producto.findByPk(id)
            .then((resultado)=>{
                resultado.comentarios = db.lista[0].comentarios
                // return res.send(resultado)
                // return res.send(resultado)
                return res.render('product', {id : resultado.id, nombre : resultado.nombre, imagen : resultado.foto, descripcion : resultado.descripcion, comentarios : comentarios})

            })

                // for(let i=0; i<producto.length; i++){
                //     productos.push({
                //         id: producto[i].id,
                //         nombre: producto[i].nombre,
                //         descripcion: producto[i].descripcion,
                //         foto: producto[i].foto,
                //         usuario_id: producto[i].usuario_id,
                //         fecha_carga: producto[i].createdAt,
                //     })
                //     req.session.Producto = productos;
                // }
                // res.locals.Producto = req.session.Producto
                // //console.log(req.session.Producto)
                // //return res.send(producto)
                // // return res.send(res.locals.Producto)
                // for(let i=0; i<locals.Producto.length; i++){
                //     if (locals.Producto[i].id == req.params.id){
                //         return res.send(locals.Producto[i].id)
                //     }
                // }
                
                // //     resultado.push(locals.Producto[i])
                // // } 
                
                // // return res.render('product', {id : resultado[0].id, nombre : resultado[0].nombre, imagen : resultado[0].imagen, descripcion : resultado[0].descripcion, comentarios : resultado[0].comentarios})
            .catch(function(error){
                console.log(error);
            })
        
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