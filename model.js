const fs = require('fs')

class Model {
  static readFile() {
    let data = JSON.parse(fs.readFileSync('data.json'))
    return data
  }

  static addTask(args) {
    let listName = args.join(' ')
    let data = this.readFile()
    let add = {
      id: (+data[data.length-1].id) + 1,
      task: listName
    }

    data.push(add)
    fs.writeFileSync('data.json', JSON.stringify(data))
    return add
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
}

module.exports = Model

// driver code
// console.log(Model.findTask(1));
