module.exports = function(sequelize, dataTypes){
    let alias = 'Usuario'
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email : {
            type : dataTypes.STRING(255),
            unique : true,
            allowNull: false
        },
        password : {
            type: dataTypes.STRING(255),
            allowNull : false
        },
        nombre_usuario : {
            type : dataTypes.STRING(50),
            unique : true,
            allowNull: false
        },
        foto_perfil : {
            type : dataTypes.STRING(255),
            allowNull: false
        },
        fecha : {
            type: dataTypes.DATE,
            allowNull: false
        },
        dni : {
            type: dataTypes.INTEGER,
            unique : true,
            allowNull : true
        },
        createdAt : {
            type : dataTypes.DATE
        },
        updatedAt : {
            type : dataTypes.DATE
        },
        deletedAt : {
            allowNull: true,
            type : dataTypes.DATE
        }
    }

    let conf = {}
    
    let User = sequelize.define(alias, cols, conf);

    User.associate = function(models){
        User.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey:"usuario_id"
        })}

    return User
}