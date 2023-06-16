let db = require("../db/dataCarnes");
let models = require('../database/models')
const op = models.Sequelize.Op;
let bcrypt = require('bcryptjs')

//Aca guardamos los errores de los formularios de usuario
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
            // usuario.cantidad = productos.length; ------> ¿¿Xq no andaaaaa??
            let cantidad = productos.length;
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
        if (req.session.Usuario == undefined){
            return res.render('register')
        } else {
            return res.redirect('/home')
        } 
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

        //1ros requirimientos de validacion 

        if (newUser.email == "") {
            errors.message = 'El email esta vacio!';
            res.locals.errors = errors;
            return res.render('register')

        } else if (form.password.length < 3) {
            errors.message = 'La contraseña debe ser mayor a 3 caracteres!';
            res.locals.errors = errors;
            return res.render('register')

        } else if (newUser.nombre_usuario.length == "") {
            errors.message = 'El nombre de usuario esta vacio!';
            res.locals.errors = errors;
            return res.render('register')
        
        } else if (newUser.dni.toString().length == 0 ){
            errors.message = '¡El dni ingresado esta vacio!'
            res.locals.errors = errors;
            return res.render('register')
        
        } else if (newUser.dni.toString().length < 8 ){
            errors.message = '¡El dni ingresado no existe, deben ser 8 caracteres!'
            res.locals.errors = errors;
            return res.render('register')

        } else {
        
        models.Usuario.findOne({
            where: {
                [op.or]: [
                  { email: newUser.email },
                  { nombre_usuario: newUser.nombre_usuario },
                  { dni: newUser.dni },
                ],
              },
        }) 
        .then(function(user){
            // return res.send(user)
            if (user){
            // Ultima validacion de la registracion.
                if (user.email == newUser.email){
                    errors.message = '¡El email de usuario ya existe!'
                    res.locals.errors = errors;
                    return res.render('register')

                } else if (user.nombre_usuario == newUser.nombre_usuario){
                    errors.message = '¡El nombre de usuario ya existe!'
                    res.locals.errors = errors;
                    return res.render('register')

                } else if (user.dni == newUser.dni){
                    errors.message = '¡El dni del usuario ya existe!'
                    res.locals.errors = errors;
                    return res.render('register')
                }
            }

            // En caso de que el usuario sea completamente nuevo, se agrega el usuario a la base.

                models.Usuario.create(newUser)
                .then(function(){
                    // return res.send(req.session.usuario)
                    // return res.redirect('/users/id/'+ req.session.Usuario.id)})
                    return res.redirect('/home')})
                .catch(function(error){
                    console.log(error)})
                    
            })
        .catch(function(error){
            console.log(error);
        })      
        }
    },
    login: function(req, res){
        if (req.session.Usuario == undefined){
            return res.render('login');
        } else {
            return res.redirect('/home');
        }
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
            // Requerimientos de validacion
                    else{
                        errors.message = '¡El nombre de usuario existe pero la contraseña es incorrecta!'
                        res.locals.errors = errors;
                        return res.render('login')
                    }
                } else {
                    if (form.usuario == ""){
                        errors.message = 'El nombre de usuario esta vacio!';
                        res.locals.errors = errors;
                        return res.render('login')
                    } else {
                        errors.message = '¡El nombre de usuario no existe!'
                        res.locals.errors = errors;
                        return res.render('login')
                    }}
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