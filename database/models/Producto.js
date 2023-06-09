module.exports = function(sequelize, dataTypes){ //sequelize tiene metodos de sequelize y datatypes la informacion de los tipos de datos
    let alias = "Producto";

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        foto: {
            type: dataTypes.STRING
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        }
    };
    let conf = {};

    let producto = sequelize.define(alias, cols, conf);

    producto.associate = function(models){
        producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey:"usuario_id"
        })
    }

    return producto;
}