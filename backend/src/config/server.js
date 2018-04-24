const port = 3003

const bodyParse = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')


server.use(bodyParse.urlencoded({extended:true}))
server.use(bodyParse.json())
server.use(allowCors)


server.listen(port, () => {
    console.log(`Server RUN ${port}`);
})

module.exports = server