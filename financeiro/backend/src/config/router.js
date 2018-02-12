const express = require('express')


module.exports = function(server) {

    //API
    const router = express.Router()
    //mider
    server.use('/api', router)

    //mapeando as rotas com todo
    const todo_service = require('../api/todo/todo_service')
    //busca os métodos da api (get, post, put, delete) declarado na api
    todo_service.register(router, '/todos')
}