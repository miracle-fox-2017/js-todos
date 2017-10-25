let Controller = require('./controller');
let fs = require('fs');
// let string = JSON.parse(fs.readFileSync('data.json'));
class Model {
  constructor(file) {
    this.file = file
  }

  static dataList() {
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    let output = '';
    this.file = jsonData;
    for (let i = 0; i < jsonData.length; i++) {
      if (this.file[i]['complete'] === false)
      output += `${i+1} - [ ] - ${this.file[i]['name']} [${this.file[i]['tag']}] created :${this.file[i]['createDate']}\n`;
      else {
        output += `${i+1} - [X] - ${this.file[i]['name']} [${this.file[i]['tag']}] created :${this.file[i]['createDate']}\n`;
      }
    }
    return output;
  }

  static addTask(task) {
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    this.file = jsonData;
    let newTask = {'name':task, 'id': jsonData.length+1,'complete':false,'createDate':new Date()}
    this.file.push(newTask);
    fs.writeFileSync('data.json',JSON.stringify(this.file));
    return task
  }

  static findTask(find){
    let output='';
    let ambilString = this.dataList().split('\n');
    for (let x = 0; x < ambilString.length; x++) {
      output = ambilString[find - 1]
    }
    return output;
  }

  static delTask(hapus){
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    this.file = jsonData;
    for(let i=0; i<jsonData.length; i++) {
      if(jsonData[i].id == hapus) {
        jsonData.splice(hapus-1, 1)
      }
    }
    fs.writeFileSync('data.json',JSON.stringify(this.file));
  }

  static doneTask(done){
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    this.file = jsonData;
    for(let i=0; i<jsonData.length; i++) {
      if(jsonData[i].id == done) {
        jsonData[i].complete = true
        jsonData[i].completeDate = new Date();
        break;
      }
    }
    fs.writeFileSync('data.json', JSON.stringify(this.file), "utf-8")
  }

  static undoneTask(undone){
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    this.file = jsonData;
    for(let i=0; i<jsonData.length; i++) {
      if(jsonData[i].id == undone) {
        jsonData[i].complete = false
        break;
      }
    }
    fs.writeFileSync('data.json', JSON.stringify(this.file), "utf-8")
  }

  static listAscen() {
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    let output = '';
    this.file = jsonData;
    let taskArr = []
    this.file = this.file.sort(function(a,b){
      return a.createDate > b.createDate
    })
    for(let i = 0; i < jsonData.length; i++){
      if(this.file[i]['complete'] === true){
        taskArr.push(`${i+1}. [x] ${this.file[i]['name']}`);
      }
      else{
        taskArr.push(`${i+1}. [ ] ${this.file[i]['name']}`)
      }
    }
    return taskArr.join('\n')
  }

  static listDesc() {
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    let output = '';
    this.file = jsonData;
    let taskArr = []
    this.file = this.file.sort(function(a,b){
      return a.createDate < b.createDate
    })
    for(let i = 0; i < jsonData.length; i++){
      if(this.file[i]['complete'] === true){
        taskArr.push(`${i+1}. [x] ${this.file[i]['name']}`);
      }
      else{
        taskArr.push(`${i+1}. [ ] ${this.file[i]['name']}`)
      }
    }
    return taskArr.join('\n')
  }

  static listCompletedAt() {
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    let output = '';
    this.file = jsonData;
    let taskArr = [];
    this.file = this.file.sort(function(a,b){
      return a.createDate > b.createDate
    })
    for(let i = 0; i < jsonData.length; i++){
      if(this.file[i]['complete'] === true){
        taskArr.push(`${i+1}. [x] ${this.file[i]['name']}`);
      }
    }
    return taskArr.join('\n')
  }

  static listCompletedDesc() {
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    let output = '';
    this.file = jsonData;
    let taskArr = [];
    this.file = this.file.sort(function(a,b){
      return a.createDate < b.createDate
    })
    for(let i = 0; i < jsonData.length; i++){
      if(this.file[i]['complete'] === true){
        taskArr.push(`${i+1}. [x] ${this.file[i]['name']}`);
      }
    }
    return taskArr.join('\n')
  }

  static listOut() {
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    let output = '';
    this.file = jsonData;
    let taskArr = [];
    this.file = this.file.sort(function(a,b){
      return a.createDate > b.createDate
    })
    for(let i = 0; i < jsonData.length; i++){
      if(this.file[i]['complete'] === false){
        taskArr.push(`${i+1}. [ ] ${this.file[i]['name']}`);
      }
    }
    return taskArr.join('\n')
  }

  static listOutDesc() {
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    let output = '';
    this.file = jsonData;
    let taskArr = [];
    this.file = this.file.sort(function(a,b){
      return a.createDate < b.createDate
    })
    for(let i = 0; i < jsonData.length; i++){
      if(this.file[i]['complete'] === false){
        taskArr.push(`${i+1}. [ ] ${this.file[i]['name']}`);
      }
    }
    return taskArr.join('\n')
  }

  static tag(id, arrTag) {
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    let output = '';
    this.file = jsonData;
    this.file[id-1].tag = arrTag
    fs.writeFileSync('data.json', JSON.stringify(this.file), "utf-8")
    return arrTag
  }

  static filter(key) {
    let theData = fs.readFileSync('data.json', 'utf-8');
    let jsonData = JSON.parse(theData);
    let output = '';
    this.file = jsonData;
    let taskArr = []
    this.file = this.file.sort(function(a,b){
      return a.createDate < b.createDate
    })
    for(let i = 0; i < jsonData.length; i++){
      let tag = this.file[i].tag
      if(tag !== undefined){
        for(let y = 0; y < tag.length; y++){
          if(key.indexOf(this.file[i].tag[y]) >= 0){
            taskArr.push(`${i+1}. ${this.file[i].name} with tag: ${this.file[i].tag}`)
          }
        }
      }
    }
    return taskArr.join('\n')
  }
}

module.exports = Model;
