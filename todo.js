const Controller = require('./controller')
const command = process.argv.slice(2)

Controller.todo(command)
// console.log(command);
