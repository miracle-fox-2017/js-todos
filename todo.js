const Controllers = require('./controllers')
let controllers = new Controllers()

let command = process.argv.slice(2)

controllers.commandHandle(command)
