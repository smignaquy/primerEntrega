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

        let filtro = {
                order: [[ "createdAt" , "DESC"]]
            }
        

        models.Producto.findAll(filtro)
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
        // return res.send(req.session.Usuario)
        id = req.params.id
        comentarios = db.lista.comentarios
       
        models.Producto.findByPk(id, {
            include : [
                {association : 'usuario'},
                {association : 'comentarios',
                include :  [{ association : 'usuario' }]
            }

            ]
        })
        .then(function(unProd){
            let info = unProd

            //return res.send(unProd)            
            //return res.send(info.comentarios[0].usuario.id.toString())
            return res.render('product', {info: unProd})
         })
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
    },
    edit: function(req, res){
        return res.redirect('product-add') //{accion: "Editar "}
    },
    comentar: function(req, res){
        // return res.send(req.session.Usuario)
        id = req.params.id

        if (req.session.Usuario != undefined){
            newComent = {
                producto_id: id,
                usuario_id: req.session.Usuario.id,
                comentario: req.body.comentario
            }
            models.Comentario.create(newComent)
            .then(function(){
                //console.log();
                // return res.redirect('/edit')
                //return res.send(req.session.Usuario)
                return res.redirect('/productos/id/'+id)
            })
            .catch(function(error){
                console.log(error);
            })
        } else {
            return res.redirect('/users/login')
        }
    }
}

module.exports = productController;