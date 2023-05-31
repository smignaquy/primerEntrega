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
        
        let newUser = {
            email : form.email,
            password : form.password,
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
        


        // if (user.email == ''){
        //     error = 'El email esta incompleto'
        // // } else if (user.email){
        // //     error = 'El email de usuario ya esta registrado'
        // } else if (user.name == ''){
        //     error = 'El nombre de usuario esta incompleto'}
        // for (let i = 0; i)
        
        // let filtro = {
        //     where: [{
        //         email: user.email
        //     }]
        // }
        
        // models.Usuario.findOne(filtro) 
        //     .then(resultado) => {
        //         if (resultado == ''){
                    
        //         }
        //     }




            
        
    },

    login: function(req, res){
        return res.render('login')
    },
    edit: function(req, res){
        return res.render('profile-edit', {user: db.usuarios[0]})
    }
}

module.exports = usersController;