let db = require('../database/models')
const op = db.Sequelize.Op;



let searchController = {
    busqueda : function(req, res){
        let palabraBuscada = req.query.search;
        let filtro ={
            where :{
             [op.or]: [
               { nombre: { [op.like]: `%${ palabraBuscada}%` } },
               { descripcion: { [op.like]: `%${ palabraBuscada}%` } }
             ]
           },
        //     include: [ { association: 'user' }],
            order: [[ "createdAt" , "DESC"]]
           }
        // res.send(op)
        db.Producto.findAll(filtro)
        .then((resultado)=>{
            return res.render('search-results', {busqueda : resultado, palabraBuscada})
        }).catch((error)=>{
            console.log(error)
        })
}}

module.exports = searchController;