let db = require("../db/dataCarnes");


let searchController = {
    busqueda : function(req, res){
        // let buscado = req.query.search;
        // let resultado = []
        // let info = db.lista
        // for (let i = 0; i < info.length; i++){
        //     if (info[i].nombre == buscado){
        //         resultado.push(info[i])
        //     }
        // if (resultado.length > 0){
        //     return res.render('search-results', {nombre : resultado[0].nombre, imagen : resultado[0].imagen, descripcion : resultado[0].descripcion})
        // }
            return res.render('search-results', {buscar : req.query.search})} 
}

module.exports = searchController;