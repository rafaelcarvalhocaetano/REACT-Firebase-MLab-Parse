const express = require('express')

module.exports = (server) =>{
    //API ROuter
    const router = express.Router()
    server.use('/api', router)


    //Rotas api do Todo
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}