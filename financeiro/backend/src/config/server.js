const port = 3003

const bodyParse = require('body-parser')
const express = require('express')
const server = express()
const allCors = require('./cors')

server.use(bodyParse.urlencoded( { extended: true } ))
server.use(bodyParse.json() )
server.use(allCors)

server.listen( port, () => {
    console.log(`BACKEND is running on port ${ port }.`)
})

module.exports = server