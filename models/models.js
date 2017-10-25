const fs = require('fs');
var Table = require('cli-table2');
var tbList = new Table({
           head: ['No', 'Status', 'Task', 'Tag']
        , style: {
            head: []    //disable colors in header cells
          , border: []  //disable colors for the border
        }
        , colWidths: [5, 10, 25, 40]  //set the widths of each column (optional)
      });
var tbSort = new Table({
           head: ['No', 'Status', 'Task']
        , style: {
          head: []    //disable colors in header cells
        , border: []  //disable colors for the border
                }
        , colWidths: [5, 10, 25]  //set the widths of each column (optional)
            });
let dataTodo = JSON.parse(fs.readFileSync('data.json','utf8'))
class Model {
  static modelList(){
    // let result = ''

    dataTodo.forEach(list =>{
      let tag = ''
      list.tag.forEach( tags =>{
        tag+=tags+', '
      })
      tbList.push(
          [list.id, list.status, list.task, tag]
      );
      // result+= `${list.id}. ${list.status} ${list.task}\n`
    })
    return tbList.toString()
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
    fs.writeFile('data.json', save, (err) => {
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
        let tag = ''
        listTask.tag.forEach( tags =>{
          tag+=tags+', '
        })
        tbList.push(
            [listTask.id, listTask.status, listTask.task, tag]
        );
      } else {
        // result = `Cannot find your TODO`
      }
    })
    return tbList.toString()
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
    fs.writeFile('data.json', save, (err) => {
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
    fs.writeFile('data.json', save, (err) => {
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
    fs.writeFile('data.json', save, (err) => {
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
      tbSort.push(
          [listTask.id, listTask.status, listTask.task]
      );
    })
    return tbSort.toString()
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
      tbSort.push(
          [listTask.id, listTask.status, listTask.task]
      );
    })
    return tbSort.toString()
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
    fs.writeFile('data.json', save, (err) => {
      let msg
      if (!err){
          msg = `Success to insert TAG your TODO list`
      } else {
          msg = `Failed to insert tag TODO`
      }
      cb(msg)
    });
  }

  static modelFilter(str){
    let result=[]
    dataTodo.forEach(listTodo =>{
      listTodo.tag.forEach(listTag=>{
        if(listTag === str){
          result.push(listTodo)
        }
      })
    })
    result.forEach(getFilter =>{
      let tag = ''
      getFilter.tag.forEach( tags =>{
        tag+=tags+', '
      })
      tbList.push(
          [getFilter.id, getFilter.status, getFilter.task, tag]
      );
    })
    return tbList.toString()
  }
}
module.exports = Model;
