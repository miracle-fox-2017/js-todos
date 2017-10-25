const fs = require('fs')
const ToDo = require('./todo.js')
class Model
{
  constructor(file)
  {
    this.file = file
  }

  readFile()
  {
    return fs.readFileSync(this.file, 'utf-8')
  }

  writeFile(data)
  {
    // console.log('haaaaai');
    fs.writeFileSync(this.file, JSON.stringify(data))
    // fs.appendFileSync(this.file, JSON.stringify(data));
  }
}

module.exports = Model
