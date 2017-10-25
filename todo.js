//ini controller

const dataToDo = require('./data')
const show = require('./view')

class ToDo{
  constructor(input){
    this.input = input
  }
  command(){
    if(this.input == 'help'){
      show.help()
    }
    else if(this.input == 'list'){
      show.list(data.bacaFile())
    }

  }
}

let data = new dataToDo('data.json')
let whatToDo = data.bacaFile()

let argv = process.argv.slice(2)
let todo = new ToDo(argv)
let userInput = todo.command()
