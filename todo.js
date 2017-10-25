const Controller = require('./controllers/controller')

let input   = process.argv
let command = input.slice(2)

Controller.help(command)
