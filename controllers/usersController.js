let db = require("../db/dataCarnes");
let models = require('../database/models')
let bcrypt = require('bcryptjs')

let errors = {}

let usersController = {
    profile : function(req, res) {
        res.render('profile', {user: db.usuarios[0], info : db.lista})
    },
    register: function(req, res){
        res.render('register')
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
               return res.send('el usuario ya existe')
            } else {
                models.Usuario.create(newUser)
                .then(function(){
                    console.log();
                    // return res.redirect('/edit')
                    return res.redirect('/home')
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
        // req.session.usuario = {
        //     email: form.email,
        //     userName: form.usuario
        // }
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
                        return res.redirect('/users')
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
            if (req.body.recordarme != undefined){
                //si lo tildo: 
                res.cookie('cookieEspecial', 'el dato que quiero guardar', {maxAge: 100*60*123123123})
            }

    },

    edit: function(req, res){
        return res.render('profile-edit', {user: db.usuarios[0]})
    }
}

module.exports = usersController;