let db = require("../db/dataCarnes");
let models = require('../database/models')
let bcrypt = require('bcryptjs')


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
                        error = '¡El nombre de usuario existe pero la contraseña es incorrecta!'
                        res.locals.errors = error
                        return res.render('login')
                    }}
                })
            .catch(function(error){
                console.log(error);
            })
            

    },

    edit: function(req, res){
        return res.render('profile-edit', {user: db.usuarios[0]})
    }
}

module.exports = usersController;