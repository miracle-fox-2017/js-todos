const fs = require('fs');
let dataTodo = JSON.parse(fs.readFileSync('data0.json','utf8'))
class Model {
  constructor() {

  }
  static modelList(){
    let result = ''
    dataTodo.forEach(list =>{
      result+= `${list.id}. ${list.status} ${list.task}\n`
    })
    return result
  }

  static modelAdd(add, cb){
    // let inputId = 0
    // if(dataTodo.hasOwnProperty('id')){
    //   inputId = ataTodo[dataTodo.length - 1].id + 1
    // } else {
    //   inputId = 1
    // }
    dataTodo.push({
      id: dataTodo[dataTodo.length - 1].id + 1,
      status: "[ ]",
      task: add,
      created_date: new Date(),
      completed_date : '',
      tag : []
    })
    let save = JSON.stringify(dataTodo)
    fs.writeFile('data0.json', save, (err) => {
      let msg
      if (!err){
          msg = `Added "${add}" to your TODO list`
      } else {
          msg = `Failed to add TODO`
      }
      cb(msg)
    });
  }
  static modelTask(task){
    let result = ''
    dataTodo.forEach(listTask =>{
      if(listTask.id === +task){
        result = `${listTask.id}. ${listTask.status} ${listTask.task}`
      } else {
        // result = `Cannot find your TODO`
      }
    })
    return result
  }
  static modelDelete(no, cb){
    let lists = []
    let delet = ''
    dataTodo.forEach(list =>{
      if(list.id !== +no){
        lists.push(list)
      } else {
        delet = list.task
      }
    })
    let save = JSON.stringify(lists)
    fs.writeFile('data0.json', save, (err) => {
      let msg
      if (!err){
          msg = `Delete "${delet}" to your TODO list`
      } else {
          msg = `Failed to delete TODO`
      }
      cb(msg)
    });
  }
  static modelComplete(no, cb){
    dataTodo.forEach(list =>{
      if(list.id === +no){
        if(list.status === "[ ]"){
          list.status = "[x]"
          list.completed_date = new Date()
        } else {
          return `TODO was complete`
        }
      }
    })
    let save = JSON.stringify(dataTodo)
    fs.writeFile('data0.json', save, (err) => {
      let msg
      if (!err){
          msg = `Success to completing your TODO list`
      } else {
          msg = `Failed to completing TODO`
      }
      cb(msg)
    });
  }
  static modelUncomplete(no, cb){
    dataTodo.forEach(list =>{
      if(list.id === +no){
        if(list.status === "[x]"){
          list.status = "[ ]"
          list.completed_date = ""
        } else {
          return `TODO was complete`
        }
      }
    })
    let save = JSON.stringify(dataTodo)
    fs.writeFile('data0.json', save, (err) => {
      let msg
      if (!err){
          msg = `Success to uncompleting your TODO list`
      } else {
          msg = `Failed to uncompleting TODO`
      }
      cb(msg)
    });
  }
  static modelCreated(str){
    dataTodo.sort((a, b)=>{
      let dateA =  new Date(a.created_date)
      let dateB = new Date(b.created_date)
      if(str === "asc"){
        return dateA > dateB
      } else if(str === "desc"){
        return dateA < dateB
      } else {
        return `Wrong input`
      }
    })
    let result = ''
    dataTodo.forEach(listTask =>{
      result += `${listTask.id}. ${listTask.status} ${listTask.task}\n`
    })
    return result
  }
  static modelCompleted(str){
    let data = []
    dataTodo.forEach(completed=>{
      if(completed.completed_date){
        data.push(completed)
      } else {
      return `Not yet`
    }
    })
    data.sort((a, b)=>{
      let dateA =  a.completed_date
      let dateB = b.completed_date
       if(str === "asc"){
          return dateA > dateB
       } else if(str === "desc"){
          return dateA < dateB
       } else {
          return `Wrong input`
        }
    })
    let result = ''
    data.forEach(listTask =>{
      result += `${listTask.id}. ${listTask.status} ${listTask.task}\n`
    })
    return result
  }
  static modelTag(no, tags, cb){
    dataTodo.forEach(insertTag => {
      if(insertTag.id === +no){
        tags.forEach(inTag =>{
          insertTag.tag.push(inTag)
        })
      }
    })
    let save = JSON.stringify(dataTodo)
    fs.writeFile('data0.json', save, (err) => {
      let msg
      if (!err){
          msg = `Success to insert TAG your TODO list`
      } else {
          msg = `Failed to insert tag TODO`
      }
      cb(msg)
    });
  }
}
module.exports = Model;
