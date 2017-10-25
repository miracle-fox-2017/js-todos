const argv = process.argv
const Model = require('../model/model.js')
const View = require('../views/view.js')



let command_a = argv[2]
let command_b = argv[3]
let command_c = argv[4]
let command_d = argv[5]

let model = new Model('../database/data.json')



class Controller {

  constructor(command_a, command_b) {
    this.data = model.readFile()
    this.command_a = command_a
    this.command_b = command_b
    this.command_c = command_c
    this.command_d = command_d

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
        case 'list:created':
            let sort = this.listCreated(this.command_b)
            View.list(sort)
          break;
          case 'list:completed':
              let completed = this.listComplete(this.command_b)
              View.list(completed)
            break;
          case 'tag':
              let tagging = this.tagCommand(this.command_b, this.command_c, this.command_d)
              View.tags(tagging, this.command_c, this.command_d)
            break;
          case 'filter:':
              let filter = this.filter(this.command_b)
              View.filter(filter)
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
      created_at:  new Date().toISOString(),
      tags : []
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

  // rilis 2
  listCreated (arg){
    console.log(arg)
    let data = this.data

    if(arg == "asc" || arg == null){
    data.sort(function compare(a, b){
        var dateA = new Date(a.created_at);
        var dateB = new Date(b.created_at);
        return dateA - dateB;
      })
    }else if(arg == "desc"){

      data.sort(function compare(a, b){
              var dateA = new Date(a.created_at);
              var dateB = new Date(b.created_at);
              return dateB - dateA;
          })
    }
    return data
      model.save(data)

  }

  listComplete (arg){
    let data = this.data
    let dataCompleteArr = []

    for(let i =0; i < data.length; i++){
      if(data[i].complete == true){
        dataCompleteArr.push(data[i])
      }
    }
    if(arg == "asc" || arg == null){
    dataCompleteArr.sort(function compare(a, b){
        var dateA = new Date(a.created_at);
        var dateB = new Date(b.created_at);
        return dateA - dateB;
      })
    }else if(arg == "desc"){

      dataCompleteArr.sort(function compare(a, b){
              var dateA = new Date(a.created_at);
              var dateB = new Date(b.created_at);
              return dateB - dateA;
          })
    }
    return  dataCompleteArr
      model.save(data)

  }

  tagCommand (id, tag1, tag2){
    let arr =  [tag1, tag2]
    let data = this.data

    for(let i =0; i < data.length; i++){
      if(data[i].id == id){
        for(let j =0; j < arr.length; j++){
            data[i].tags.push(arr[j])
            model.save(data)
            return data[i].task
        }
      }

    }

  }

  filter (tag1){
    let arr = []
    let data = this.data

      for(let i =0; i < data.length; i++){
        for(let j =0;j < data[i].tags.length; j++){
        if(data[i].tags[j] == tag1)
          arr.push(data[i].id,data[i].task, [data[i].tags[j]])
        }
      }

      model.save(this.data)
      return arr
    }













}





let control = new Controller(command_a, command_b)

control.command()

module.exports = Controller;
