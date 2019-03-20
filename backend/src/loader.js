const server = require('./config/server')
require('./config/database')
require('./config/routes')(server) // chamando o metodo exportado e passando parametro