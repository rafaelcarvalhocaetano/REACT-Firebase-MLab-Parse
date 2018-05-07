const port = 3003

const body_parse = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

//use o urlencoded para interpretar 
server.use(body_parse.urlencoded( { extended: true } ) )
// vai fazer um parse toda vez que vier no corpo da requisição um json
server.use(body_parse.json())
server.use(allowCors)
server.use(queryParser())

//fica escutando a porta 3003
server.listen(port, function (){
    console.log(`BACK-END Rodando na porta ${port}. `)
})

module.exports = server