const fs = require('fs')

class Model {
  static readFile() {
    let data = JSON.parse(fs.readFileSync('data.json'))
    return data
  }

  static addTask(args) {
    let listName = args.join(' ')
    let data = this.readFile()
    let addTask = {
      id: (+data[data.length-1].id) + 1,
      task: listName,
      complete: false
    }

    data.push(addTask)
    fs.writeFileSync('data.json', JSON.stringify(data))
    return addTask
  }

  static findTask(args) {
    let data = this.readFile()
    for(let i = 0; i < data.length; i++) {
      if(data[i].id == args) {
        return data[i]
      }
    }
  }

  static deleteTask(args) {
    let data = this.readFile()
    for(let i = 0; i < data.length; i++) {
      if(data[i].id == args) {
        let deleteTask = data[i]
        data.splice(i, 1)
        fs.writeFileSync('data.json', JSON.stringify(data))
        return deleteTask
      }
    }
  }

  static completeTask(args) {
    let data = this.readFile()
    for(let i = 0; i < data.length; i++) {
      if(data[i].id == args) {
        data[i].complete = true
        fs.writeFileSync('data.json', JSON.stringify(data))
        return data
      }
    }
  }

  static uncompleteTask(args) {
    let data = this.readFile()
    for (let i = 0; i < data.length; i++) {
      if(data[i].id == args) {
        data[i].complete = false
        fs.writeFileSync('data.json', JSON.stringify(data))
        return data
      }
    }
  }
}

module.exports = Model

// driver code
// console.log(Model.findTask(1));
