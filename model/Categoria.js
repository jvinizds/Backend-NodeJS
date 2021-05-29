const mongoose = require('mongoose')
//Criando o schema Categoria

const CategoriaSchema = mongoose.Schema({
    nome: {type: String, unique:true},
    status: { type:String, enum:['ativo','inativo'], default:'ativo'},
    foto: {
        originaName: {type:String},
        path: {type:String},
        size: {type:Number},
        mimetype: {type:String},
    }
},{timestamp:true})

module.exports = mongoose.model('categoria', CategoriaSchema)