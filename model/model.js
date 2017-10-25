const fs = require('fs')


class Model {
  constructor (namaFile){
    this.file = namaFile
    this.foo = []
  }

  readFile() {

    return  JSON.parse(fs.readFileSync(this.file, 'utf-8'))


  }

  save(newTask){
    fs.writeFileSync(this.file,JSON.stringify(newTask), 'utf8')
  }
}


module.exports = Model;
