const server = require('./config/server')
require('./config/database')
//passando o server como parametro
require('./config/router')(server)