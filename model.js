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
      id: data.length == 0 ? 1 : (+data[data.length-1].id) + 1,
      task: listName,
      complete: false,
      createdAt: new Date(),
      completedAt: null,
      tag: []
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
        data[i].completedAt = new Date()
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
        data[i].completedAt = null
        fs.writeFileSync('data.json', JSON.stringify(data))
        return data
      }
    }
  }

  static listCreated(args) {
    let data = this.readFile()
    if(args == 'desc') {
      data.sort((a, b) => {return new Date(b.createdAt) - new Date(a.createdAt)})
      return data
    } else if(args == 'asc' || args == null){
      data.sort((a, b) => {return new Date(a.createdAt) - new Date(b.createdAt)})
      return data
    }
  }

  static listComplited(args) {
    let data = this.readFile()
    if(args == 'desc') {
      data.sort((a, b) => {return new Date(b.completedAt) - new Date(a.completedAt)})
      return data
    } else if(args == 'asc' || args == null){
      data.sort((a, b) => {return new Date(a.completedAt) - new Date(b.completedAt)})
      return data
    }
  }

  static tagTask(args) {
    let data = this.readFile()
    let tag = null
    for(let i = 0; i < data.length; i++) {
      for (let j = 1; j < args.length; j++) {
        if(data[i].id == args[0]) {
          data[i].tag.push(args[j])
          tag = data[i]
        }
      }
    }
    fs.writeFileSync('data.json', JSON.stringify(data))
    return tag
  }

  static filterTag(args) {
    let data = this.readFile()
    let arrFilter = []
    // return data[1].tag[0]
    for (let i = 0; i < data.length; i++) {
      // console.log('--> masuk for 1');
      // console.log(data[i].tag);
      for (let j = 0; j < data[i].tag.length; j++) {
        // console.log('--> masuk for 2');
        if(data[i].tag[j] == args) {
          arrFilter.push(data[i])

        }
      }
    }
    return arrFilter
  }
}

module.exports = Model

// driver code
// console.log(Model.findTask(1));
