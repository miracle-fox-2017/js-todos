const Model = require('./model.js')
const View = require('./view.js')

class ToDo
{
  constructor()
  {
    this.data =  new Model('data.json')
    this.parsed = JSON.parse(this.data.readFile())
  }
  commands(input)
  {
    console.log(input);
    // input = argv
    if(input == 'help')
    {
      View.help()
    }
    if(input == 'list')
    {
      View.list(this.data.readFile())
      View.help()
    }
    if(input[0] == 'add')
    {
      // let data = this.parsed
      let number = this.parsed.length+1
      let arr = []
      let obj = { id: number, task: argv[1]}
      for(let i = 0; i < this.parsed.length; i++)
      {
        arr.push(this.parsed[i])
      }
      arr.push(obj)
      if(argv.length > 1)
      {
        this.data.writeFile(arr)
        View.add(argv[1])
      } else if(argv.length < 2)
      {
        View.addAlert()
      }
    }
    if(input[0] == 'task')
    {
      let number = input[1]
      let task = this.parsed[number - 1]
      View.finder(task)
    }
    if(input[0] == 'delete')
    {
      let number = input[1]
      // for(let i = 0; i < 4; i++)
      // {
      //
      // }
    }
  }
}

module.exports = ToDo
const todo = new ToDo
console.log(this.parsed.length);
// let data =
// let dataRead = data.readFile()
let argv = process.argv.slice(2)
let userInput = todo.commands(argv)
// let dataWrite = data.writeFile(argv[1])
// console.log(JSON.parse(dataRead));
// console.log(data);
