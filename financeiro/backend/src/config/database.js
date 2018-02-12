const mongo = require('mongoose')

//tira a mensagem de erro
mongo.Promise = global.Promise

//constante que busca através da url a conexão
const mongoUrl = 'mongodb://rafaelcarvalho:q1w2e3r4@ds046367.mlab.com:46367/react'

//função que realiza a conexão com o mlab
function conMlab(){
    return mongo.connect(mongoUrl, { useMongoClient:true });
}
//exporta os modulos declarados
module.exports = {
    conMlab,
    mongo
};