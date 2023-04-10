let db = require("../db/dataCarnes");

let usersController = {
    profile : function(req, res) {
        res.render('profile', {user: db.usuarios[0]})
    },
    register: function(req, res){
        res.render('register')
    },
    login: function(req, res){
        return res.render('login')
    },
    edit: function(req, res){
        return res.render('profile-edit', {user: db.usuarios[0]})
    }
}

module.exports = usersController;