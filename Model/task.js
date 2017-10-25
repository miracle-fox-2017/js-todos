const fs = require('fs');

class TaskTodo {
  // static bacaInput (){
  //   let tulis = process.argv.slice(2)
  //   return tulis
  // }
  static bacaList (){
      let file = fs.readFileSync('./data.json','utf-8')
      return JSON.parse(file)
  }
  static save (dataBaru){
    let file = fs.writeFileSync('./data.json',JSON.stringify(dataBaru))
  }
  static hapus (arr){
    let file = fs.writeFileSync('./data.json',JSON.stringify(arr))
  }
  static update (arr){
    let file = fs.writeFileSync('./data.json',JSON.stringify(arr))
  }

}
// let data = TaskTodo.bacaList()
// console.log(data.list)
module.exports = TaskTodo;
