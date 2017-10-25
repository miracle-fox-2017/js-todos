const argv = process.argv
const Model = require('../model/model.js')
const View = require('../views/view.js')



let command_a = argv[2]
let command_b = argv[3]

let model = new Model('../database/data.json')



class Controller {

  constructor(command_a, command_b) {
    this.data = model.readFile()
    this.command_a = command_a
    this.command_b = command_b
  }


  command(){

    switch (this.command_a) {
      case 'help':
          View.listCommand()
        break;
      case 'add' :
          this.addList(this.command_b)
          View.succes(this.command_b)
        break;
      case 'list' :
          View.list(this.data)
        break;
      case 'task':
          let dataId = this.findId(this.command_b)
          View.findId(dataId)
        break;
      case 'delete':
          let del = this.deleteList(this.command_b)
          View.deleteList()
        break;
      case 'complete':
          this.complete(this.command_b)
          View.list(this.data)
        break;
        case 'uncomplete':
            this.uncomplete(this.command_b)
            View.list(this.data)
          break;
      default:
      View.listCommand()
    }
   }

  addList(newTask){
     let dataArr = []
     this.data.forEach(item =>{
       dataArr.push(item)
     })
    let obj = {

      id : this.data.length == 0 ? 1 : this.data[this.data.length-1].id + 1,
      task : newTask,
      complete: false,
      created_at:  new Date().toISOString()
    }
    dataArr.push(obj)
    model.save(dataArr)
  }

  findId(id) {

    for(let i =0; i < this.data.length; i++){
      if(this.data[i].id == id){
        return this.data[i]
      }
    }
  }

  deleteList(id){
    let dataArr = []
    for(let i =0; i < this.data.length; i++){
      if(this.data[i].id != id){
        dataArr.push(this.data[i])
      }
    }
    model.save(dataArr)
  }

  complete(id){
    for(let i =0; i < this.data.length; i++){
      if(this.data[i].id == id){
        this.data[i].complete =  true
      }
    }
    model.save(this.data)
  }

  uncomplete(id){
    for(let i =0; i < this.data .length; i++){
      if(this.data[i].id == id){
        this.data[i].complete = false
      }
    }
    model.save(this.data)
  }



}





let control = new Controller(command_a, command_b)

control.command()

module.exports = Controller;
