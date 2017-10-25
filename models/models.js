const fs = require('fs');
let dataTodo = JSON.parse(fs.readFileSync('data0.json','utf8'))
class Model {
  constructor() {

  }
  static modelList(){
    let result = ''
    let no = 1
    dataTodo.forEach(list =>{
      result+= `${no}. ${list.task}\n`
      no++
    })
    return result
  }
}
module.exports = Model;
