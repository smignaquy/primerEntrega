module.exports = function(sequelize, dataTypes){
    let alias = "Comentario";

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        producto_id : {
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        }
    };

    let conf = {};

    let comentario = sequelize.define(alias, cols, conf);

    comentario.associate = function(models){
        comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey:"usuario_id"
        })
        comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey:"producto_id"
        })
    }

    return comentario;
}