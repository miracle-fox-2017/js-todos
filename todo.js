const Controller = require('./controller')
const command = process.argv.slice(2)

Controller.todo(command[0], command[1])
// console.log(command);
