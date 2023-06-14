let db = require("../db/dataCarnes");
let models = require('../database/models')
let bcrypt = require('bcryptjs')

let errors = {}

let usersController = {
    profile : function(req, res){
        let productos = [];
        let filter = {
            where: [{
                usuario_id: req.params.id
            }]
        };
        models.Producto.findAll(filter)
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
                //return productos
                }})
            
        let filtro = {
            where: [{
                id: req.params.id
            }]
        };
        models.Usuario.findOne(filtro)
        .then(function(usuario){
            let cantidad = productos.length;
            // usuario.cantidad = productos.length;
            // return res.send(usuario)
            return res.render('profile', {info: usuario, producto: productos, cant: cantidad})
            })
        .catch(function(error){
            console.log(error);
        })
        

        // counter = 0
        // for (let i = 0; i < locals.Producto.length; i++){
        //     if (locals.Producto.id == req.params.id){
        //         counter ++
        //     }
        // }
        // res.render('profile', {user: db.usuarios[0], info : db.lista, post: counter})//user: db.usuarios[0], info : db.lista})
    },
    register: function(req, res){
        return res.render('register')
    },
    store:  function(req, res){
        let form = req.body
        
        let newUser = {
            email : form.email,
            password : bcrypt.hashSync(form.password, 10),
            nombre_usuario: form.usuario,
            fecha : form.fechaNacimiento,
            dni : form.dni,
            foto_perfil : form.fotoPerfil
        };
        
        models.Usuario.findOne({
            where: [{
                email : newUser.email
            }]
        }) 
        .then (function(user){
            // return res.send(user)

            if (user){
                errors.message = '¡El email de usuario ya existe!'
                res.locals.errors = errors;
                return res.render('register')
            } else {
                models.Usuario.create(newUser)
                .then(function(){
                    console.log();
                    // return res.redirect('/edit')
                    //return res.send(req.session.Usuario)
                    return res.redirect('/users/id/'+ req.session.Usuario.id)
                })
                .catch(function(error){
                    console.log(error);
                })
            }
        })      
    },

    login: function(req, res){
        return res.render('login')
    },

    procesarLogin: function(req,res){
        let form = req.body
        // let userLogin = {
        //     password : bcrypt.hashSync(form.password, 10),
        //     nombre_usuario: form.usuario,
        // };
        
        let filtro = {
            where: [{
                nombre_usuario: form.usuario
            }]
        };
        models.Usuario.findOne(filtro)
            .then((resultado)=>{
                if (resultado) {
                    let comparacion = bcrypt.compareSync(form.password, resultado.password)
                    if (comparacion){
                        req.session.Usuario = {
                            id: resultado.id,
                            email: resultado.email,
                            nombre: resultado.nombre_usuario,
                            foto: resultado.foto_perfil,
                            password: resultado.password,
                            dni: resultado.dni,
                            fecha: resultado.fecha
                        }
                        res.locals.Usuario = req.session.Usuario
                        // return res.send(res.locals.Usuario)
                            if (req.body.recordarme != undefined){
                                //si lo tildo: 
                                res.cookie('Recordarme', resultado.id, {maxAge: 100*60*123123123})
                            }
                        return res.redirect('/users/id/' + req.session.Usuario.id)
                    }
                    else{
                        errors.message = '¡El nombre de usuario existe pero la contraseña es incorrecta!'
                        res.locals.errors = errors;
                        return res.render('login')
                    }
                } else {
                    errors.message = '¡El nombre de usuario no existe!'
                    res.locals.errors = errors;
                    return res.render('login')
                    }
                })
            .catch(function(error){
                console.log(error);
            })
            
            //preguntar si el usuario tildo el checkbox para recordsrlo
            //return res.send(req.body);
        
            //console.log(req.session.Usuario)
    },

    edit: function(req, res){
        return res.render('profile-edit', {user: db.usuarios[0]})
    },
    logout: function(req,res){
            //destruir session
            req.session.destroy()

            //Destruyo la cookie
            return res.redirect('/home')
    }
}

module.exports = usersController;