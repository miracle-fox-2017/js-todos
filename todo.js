const Todos = require('./Controller/controller');

class Apps {
static helpCommd (input){
      Todos.inputan(input)
    }
  }


let argv = process.argv.slice(2)
Apps.helpCommd(argv)
// Todos.find()
