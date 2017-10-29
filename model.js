let fs = require('fs');
class Model {
  constructor(taskList){
    this.taskList = taskList
  }
  static getJson(argv){
    let taskArr = [];
    let taskListJson = fs.readFileSync('data.json','utf8');
    this.taskList = JSON.parse(taskListJson);
    for(let i = 0; i < this.taskList.length; i ++){
      if(this.taskList[i].completed === true){
        taskArr.push(`${i+1}. [x] ${this.taskList[i].task}`);
      }
      else{
        taskArr.push(`${i+1}. [ ] ${this.taskList[i].task}`)
      }
    }
    return taskArr.join('\n');
  }
  static addTask(argv){
    let newTask = {'task':argv.join(' '),'completed':false,'created_at':new Date()}
    this.taskList.push(newTask);
    fs.writeFileSync('data.json',JSON.stringify(this.taskList));
    return `${argv.join(' ')} has added successfully`
  }
  static findTaskId(argv){
    return `${parseInt(argv)}. ${this.taskList[parseInt(argv)-1].task}`
  }
  static deleteTaskId(argv){
    if(argv === undefined){
      return 'Please insert the correct task ID'
    }
    else{
      this.taskList.splice(parseInt(argv)-1,1);
      fs.writeFileSync('data.json',JSON.stringify(this.taskList))
      return `Your task has been deleted`
    }
  }
  static completeTaskId(argv){
    for(let i = 0; i < this.taskList.length; i++){
      if(argv-1 === i){
        this.taskList[i] = {
          'task':this.taskList[i].task,
          'completed':true,
          'created_at':this.taskList[i].created_at,
          'completed_at':new Date()};
        fs.writeFileSync('data.json',JSON.stringify(this.taskList))
        return `You've completed ${this.taskList[i].task}`
      }
    }
  }
  static uncompleteTaskId(){
    let taskArr = [];
    for(let i = 0;  i < this.taskList.length; i++){
      if(this.taskList[i].completed === false){
        taskArr.push(`${i+1}. [ ] ${this.taskList[i].task}`)
      }
    }
    return taskArr.join('\n')
  }
  static listCreatedAt(argv){
    if(argv === 'asc'){
      let taskArr = []
      this.taskList = this.taskList.sort(function(a,b){
        return a.created_at < b.created_at
      })
      for(let i = 0; i < this.taskList.length; i++){
        if(this.taskList[i].completed === true){
          taskArr.push(`${i+1}. [x] ${this.taskList[i].task}`);
        }
        else{
          taskArr.push(`${i+1}. [ ] ${this.taskList[i].task}`)
        }
      }
      return taskArr.join('\n')
    }
    else if(argv === 'desc'){
      let taskArr = []
      this.taskList = this.taskList.sort(function(a,b){
        return a.created_at > b.created_at
      })
      for(let i = 0; i < this.taskList.length; i++){
        if(this.taskList[i].completed === true){
          taskArr.push(`${i+1}. [x] ${this.taskList[i].task}`);
        }
        else{
          taskArr.push(`${i+1}. [ ] ${this.taskList[i].task}`)
        }
      }
      return taskArr.join('\n')
    }
    else{
      let taskArr = []
      this.taskList = this.taskList.sort(function(a,b){
        return a.created_at < b.created_at
      })
      for(let i = 0; i < this.taskList.length; i++){
        if(this.taskList[i].completed === true){
          taskArr.push(`${i+1}. [x] ${this.taskList[i].task}`);
        }
        else{
          taskArr.push(`${i+1}. [ ] ${this.taskList[i].task}`)
        }
      }
      return taskArr.join('\n')
    }
  }
  static listCompletedAt(argv){
    if(argv === 'asc'){
      let taskArr = [];
      this.taskList = this.taskList.sort(function(a,b){
        return a.completed_at < b.completed_at
      })
      for(let i = 0; i < this.taskList.length; i++){
        if(this.taskList[i].completed === true){
          taskArr.push(`${i+1}. [x] ${this.taskList[i].task}`);
        }
      }
      return taskArr.join('\n')
    }
    else if(argv === 'desc'){
      let taskArr = [];
      this.taskList = this.taskList.sort(function(a,b){
        return a.completed_at > b.completed_at
      })
      for(let i = 0; i < this.taskList.length; i++){
        if(this.taskList[i].completed === true){
          taskArr.push(`${i+1}. [x] ${this.taskList[i].task}`);
        }
      }
      return taskArr.join('\n')
    }
    else{
      let taskArr = [];
      this.taskList = this.taskList.sort(function(a,b){
        return a.completed_at < b.completed_at
      })
      for(let i = 0; i < this.taskList.length; i++){
        if(this.taskList[i].completed === true){
          taskArr.push(`${i+1}. [x] ${this.taskList[i].task}`);
        }
      }
      return taskArr.join('\n')
    }
  }
  static addTag(argv,addTag){
    for(let i = 0; i < this.taskList.length; i++){
      if(parseInt(argv)-1 === i){
        this.taskList[i] = {
          'task':this.taskList[i].task,
          'completed':this.taskList[i].completed,
          'created_at':this.taskList[i].created_at,
          'completed_at':this.taskList[i].completed_at,
          'tag':addTag
        }
        fs.writeFileSync('data.json',JSON.stringify(this.taskList))
        return `Tagged task ${this.taskList[i].task} with tags: ${addTag}`
      }
    }
  }
  static listTaggedTask(argv){
    let taskArr = []
    this.taskList = this.taskList.sort(function(a,b){
      return a.created_at < b.created_at
    })
    for(let i = 0; i < this.taskList.length; i++){
      let tag = this.taskList[i].tag
      if(tag !== undefined){
        for(let y = 0; y < tag.length; y++){
          if(argv.indexOf(this.taskList[i].tag[y]) >= 0){
            taskArr.push(`${i+1}. ${this.taskList[i].task} with tag: ${this.taskList[i].tag}`)
          }
        }
      }
    }
    return taskArr.join('\n')
  }
}

module.exports = Model
