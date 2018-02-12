//const que receberá o node restful
const restful = require('node-restful')

const mongoose = restful.mongoose

//criando um schema para o db
const todoSchema = new mongoose.Schema({
    description : {type:String, required:true },
    done : { type:Boolean, required:true, default:false },
    //verificando a data de modificação
    createdAt : {type:Date, default: Date.now }
})

//exportando o schema
module.exports = restful.model('Todo', todoSchema)