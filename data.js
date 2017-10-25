const fs = require('fs')

  class Data {
    constructor(file) {
      this.file = file;
    }
    static readFile(file){
      return fs.readFileSync(file, 'utf-8')
  }
    static add_data (user, file){
      let data = JSON.parse(fs.readFileSync(file, 'utf-8'))
      let panjang = data.length

      let Obj = {
        'id' : data.length+1,
        'task' : user.join(' ')
      }
      data.push(Obj)
      fs.writeFileSync(file, JSON.stringify(data), 'utf-8')
    }
    deleted(Data){
      fs.writeFileSync(file, JSON.stringify(data), 'utf-8')
    }

}
module.exports = Data
