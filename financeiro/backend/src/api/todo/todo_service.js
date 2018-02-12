//importando o todo_schema
const Todo_api = require('./todo')

Todo_api.methods(['get', 'post', 'put', 'delete'])

//forçando atualizações
Todo_api.updateOptions({new: true, runValidators: true})


module.exports = Todo_api