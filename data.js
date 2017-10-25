// ini model
const fs = require('fs')
class DataToDo {
  constructor(file) {
    this.file = file
  }
  bacaFile(){
    return fs.readFileSync(this.file, 'utf-8')
  }
  writeFile(data) {
    fs.writeFileSync(this.file, JSON.stringify(data))
  }
}

module.exports = DataToDo
