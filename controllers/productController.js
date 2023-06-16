let db = require("../db/dataCarnes");
let models = require('../database/models')

//Aca guardamos los errores de los formularios de producto
let errors = {}

let productController = {
    index : function(req, res){
            models.Producto.findAll()
            .then(function(productos){
                req.session.Producto = {
                    nombre: productos.nombre,
                    descripcion: productos.descripcion,
                    usuario: productos.usuario_id,
                    fecha_carga: productos.createdAt,
                }
                res.locals.Producto = req.session.Producto
                return res.render('productos');
            })
            .catch(function(error){
                console.log(error);
            })
        },

    todosProductos: function(req, res){
        productos = [];
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
                
                return res.render('productos');
            })
            .catch(function(error){
                console.log(error);
            })
    },

    product: function(req, res){
        //return res.send(req.session.Usuario)
        id = req.params.id
        // comentarios = db.lista.comentarios
       
        models.Producto.findByPk(id, {
            include : [
                {association : 'usuario'},
                {association : 'comentarios',
                include :  [{ association : 'usuario' }]}
            ]
        })
        .then(function(unProd){
            //return res.send(unProd)
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
        if (req.session.Usuario != undefined){
            return res.render('product-add')
        } else {
            return res.redirect('/home')
        }
        
    },
    
    processAgregar: function(req, res){
        let form = req.body

        let newProduct = {
            nombre : form.nombre,
            descripcion: form.descripcion,
            foto : form.imagen,
            usuario_id : req.session.Usuario.id,
        };

        // Validacion del producto.

        if (newProduct.nombre == "") {
            errors.message = 'El nombre del producto esta vacio!';
            res.locals.errors = errors;
            return res.render('product-add')

        } else if (newProduct.descripcion == "") {
            errors.message = 'La descripcion esta vacia!';
            res.locals.errors = errors;
            return res.render('product-add')
        
        } else if (newProduct.foto == '') {
            errors.message = 'Debes agregar un link de una imagen que represente el producto.';
            res.locals.errors = errors;
            return res.render('product-add')

        } 
        // Validacion completada, se agrega el producto en la base.
        else {
            models.Producto.create(newProduct)
            .then(function(){
                let succes = 'Producto agregado' // ----> Arreglar esto y poder mandarlo a la vista.
                res.locals.succes = succes
                return res.redirect('/users/id/'+ req.session.Usuario.id)
            })
            .catch(function(error){
                console.log(error);
            })  
        }
    },
    comentar: function(req, res){

        id = req.params.id

        if (req.session.Usuario == undefined){
            errors.message = 'Debes loguearte para comentar!'; // ----> Arreglar esto y poder mandarlo a la vista.
            res.locals.errors = errors;
            return res.redirect('/users/login')

        } else {
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
        } 
    },
    editProcess: function(req, res){
        cambios = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            foto: req.body.foto
        }
        models.Producto.findByPk(req.params.id)
        .then(function(producto){
            if(producto.usuario_id == req.session.Usuario.id){
                models.Producto.update(cambios, 
                    {
                    where: {
                        id: req.params.id
                    }
                })
                .then(function(){
                    //return res.send(cambios)
                    return res.redirect('/productos/id/'+ req.params.id)
                })
                .catch(function(error){
                    console.log(error);
                })
            } else {
                return res.redirect('/home')
            }
        })
    },
    edit: function(req, res){
        id = req.params.id
        models.Producto.findByPk(id)
        .then(function(unProd){
            //return res.send(unProd)
            return res.render('product-edit', {info: unProd})
        })},
    delete: function(req, res){
        let id = req.params.id
        let form = req.body
        
        models.Producto.findByPk(req.params.id)
        .then(function(producto){
            //return res.send(producto)
            if(producto.usuario_id == req.session.Usuario.id){
                models.Comentario.destroy({
                    where: {
                        producto_id : req.params.id
                    }
                })
                    .then(function(){
                        models.Producto.destroy({
                            where: {
                                id: req.params.id
                            }
                        })
                        .then(function(){
                            return res.redirect('/home')
                        })
                        .catch(function(error){
                            console.log(error);
                        })
                    })
            } else {
                return res.redirect('/home')
            }})
    }

}

module.exports = productController;