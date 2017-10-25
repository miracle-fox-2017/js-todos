const fs = require('fs')

class Models {
  constructor(file) {
    this.help = [
                  '$ node todo.js #will call help',
                  '$ node todo.js help',
                  '$ node todo.js list',
                  '$ node todo.js add <task_content>',
                  '$ node todo.js task <task_id>',
                  '$ node todo.js delete <task_id>',
                  '$ node todo.js complete <task_id>',
                  '$ node todo.js uncomplete <task_id>',
                  '$ node todo.js list:created asc|desc',
                  '$ node todo.js list:completed asc|desc',
                  '$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>',
                  '$ node todo.js filter:<tag_name>',
                ]
    this.file = file
    this.list = this.readFile()
  }

  readFile() {
    return JSON.parse(fs.readFileSync(this.file, 'utf8'))
  }

  saveFile(data) {
    fs.writeFileSync(this.file, JSON.stringify(data))
  }

  addFile(newTask) {
    let lastId
    if(this.list.length == 0){
      lastId = 1
    }else{
      lastId = +this.list[this.list.length-1].id+1
    }
    let task = {
                id:lastId,
                task:newTask,
                finish:false,
                tagName:[],
                createdAt:new Date(),
                completedAt:null
               }
    this.list.push(task)
    this.saveFile(this.list)
    return `Added "${newTask}" to your TOD list`
  }

  commandList(msg='') {
    return `${msg}${this.help.join('\n')}`
  }

  readList(list = this.list,tag) {
    let finish
    let listArr = []
    if(this.list.length == 0){
      return 'Your TODO list is empty!!'
    }
    for (var i = 0; i < list.length; i++) {
      if(list[i].finish == false){
        finish = '[ ]'
      }else{
        finish = '[X]'
      }
      let tag = ''
      if(list[i].tagName.length != 0){
        tag = `[${list[i].tagName}]`
      }
      listArr.push(`${list[i].id}. ${finish} ${list[i].task} ${tag}`)
    }
    return listArr.join('\n')
  }

  findTask(id) {
    for (var i = 0; i < this.list.length; i++) {
      if(this.list[i].id == id){
        return this.readList([this.list[i]])
      }
    }
    return `Task not found!!!`
  }

  delTask(id) {
    for (var i = 0; i < this.list.length; i++) {
      if(this.list[i].id == id){
        let task = this.list[i].task
        this.list.splice(i, 1)
        this.saveFile(this.list)
        return `Deleted "${task}" from your TODO list`
      }
    }
    return `Task not found!!!`
  }

  completeTask(id) {
    for (var i = 0; i < this.list.length; i++) {
      if(this.list[i].id == id){
        this.list[i].finish = true
        this.list[i].completedAt = new Date()
        this.saveFile(this.list)
        return `Good job, your task "${this.list[i].task}" is completed`
      }
    }
    return `Task not found!!!`
  }

  uncompleteTask(id) {
    for (var i = 0; i < this.list.length; i++) {
      if(this.list[i].id == id){
        this.list[i].finish = false
        this.list[i].completedAt = null
        this.saveFile(this.list)
        return `Task "${this.list[i].task}" is uncomplete`
      }
    }
    return `Task not found!!!`
  }

  sortList(list, order = 'asc') {
    if(order == 'asc'){
      list.sort(function(a,b){
        return new Date(a.createdAt) - new Date(b.createdAt);
      })
    }else if(order == 'desc'){
      list.sort(function(a,b){
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
    }
    return list
  }

  createdSort(order = 'asc') {
    return this.readList(this.sortList(this.list, order))
  }

  completedSort(order = 'asc') {
    let listComp = []
    for (var i = 0; i < this.list.length; i++) {
      if(this.list[i].completedAt != null){
        listComp.push(this.list[i])
      }
    }
    if(listComp.length == 0){
      return 'No task completed!!!'
    }else{
      return this.readList(this.sortList(listComp, order))
    }
  }

  addTag(id,tag) {
    for (var i = 0; i < this.list.length; i++) {
      if(this.list[i].id == id){
        tag.forEach(name=>{
          this.list[i].tagName.push(name)
        })
        this.saveFile(this.list)
        return `Tagged task "${this.list[i].task}" with tags : ${tag}`
      }
    }
  }

  findByTag(tag, order) {
    let byTag = []
    for (var i = 0; i < this.list.length; i++) {
      for (var j = 0; j < this.list[i].tagName.length; j++) {
        if(this.list[i].tagName[j] == tag){
          byTag.push(this.list[i])
        }
      }
    }
    if(byTag.length == 0){
      return 'tag not found!!!'
    }
    return this.readList(this.sortList(byTag, order),'tag')
  }
}
module.exports = Models;
