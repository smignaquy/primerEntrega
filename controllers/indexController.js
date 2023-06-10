let db = require("../db/dataCarnes");
let models = require('../database/models');


let indexController = {
    home : function(req, res){
        let productos = []
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
        return res.render('index')//{info: locals.Producto}
        })
        
        .catch(function(error){
            console.log(error);
        })
    }}

module.exports = indexController