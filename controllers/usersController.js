let db = require("../db/dataCarnes");
let models = require('../database/models')


let usersController = {
    profile : function(req, res) {
        res.render('profile', {user: db.usuarios[0], info : db.lista})
    },
    register: function(req, res){
        res.render('register')
    },
    store:  function(req, res){
        let form = req.body

        let user = {
            email : form.email,
            password : form.password,
            nombre_usuario: form.usuario,
            fecha : form.fechaNacimiento,
            dni : form.dni,
            foto_perfil : form.fotoPerfil
        };
        // if (user.email == ''){
        //     error = 'El email esta incompleto'
        // // } else if (user.email){
        // //     error = 'El email de usuario ya esta registrado'
        // } else if (user.name == ''){
        //     error = 'El nombre de usuario esta incompleto'}
        // for (let i = 0; i)
        
        let filtro = {
            where: [{
                email: user.email
            }]
        }
        
        // models.Usuario.findOne(filtro) 
        //     .then(resultado) => {
        //         if (resultado == ''){
                    
        //         }
        //     }



        models.Usuario.create(user)
            .then(function(usuarioCreado){
                console.log(usuarioCreado);
                // return res.redirect('/edit')
            })
            .catch(function(error){
                console.log(error);
            })
    },

    login: function(req, res){
        return res.render('login')
    },
    edit: function(req, res){
        return res.render('profile-edit', {user: db.usuarios[0]})
    }
}

module.exports = usersController;