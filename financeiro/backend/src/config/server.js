const port = 3003


const body_parse = require('body-parser')
const express = require('express')
const server = express()

server.use(body_parse.urlencoded( { extended: true } ))
server.use(body_parse.json() )

server.listen( port, () => {
    console.log(`BACKEND is running on port ${ port }.`)
})