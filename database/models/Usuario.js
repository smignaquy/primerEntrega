module.exports = function(sequelize, Datatypes){
    let alias = 'Usuario'
    
    let cols = {
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email : {
            type : Datatypes.STRING(50),
            unique : true,
            allowNull: false
        },
        password : {
            type: Datatypes.STRING(50),
            allowNull : false
        },
        nombre_usuario : {
            type : Datatypes.STRING(50),
            unique : true,
            allowNull: false
        },
        foto_perfil : {
            type : Datatypes.STRING(50),
            allowNull: false
        },
        fecha : {
            type: Datatypes.DATE,
            allowNull: false
        },
        dni : {
            type: Datatypes.INT,
            unique : true,
            allowNull : true
        },
        createdAt : {
            type : Datatypes.DATE
        },
        updatedAt : {
            type : Datatypes.DATE
        },
        deletedAt : {
            allowNull: true,
            type : Datatypes.DATE
        }
    }

    // let config = {

    // }
    
    let User = sequelize.define(alias, cols, config);
    return User
}