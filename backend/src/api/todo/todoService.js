const Todo = require('./todo') // ele recebe 'restful.model('Todo', todoSchema)' do todo.js

Todo.methods(['get', 'post', 'put', 'delete'])

// Retorna o valor atualizado, e runValidators usa a validação no update
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo