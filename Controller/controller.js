const fs = require('fs');
const Print = require('../View/help');
const TaskTodo = require('../Model/task');

class Todos {
static inputan (argv){
        let data = TaskTodo.bacaList()
        let counter = 1
        let arrSplit = argv[0].split(':')
        if (argv[0] === 'help'){
          Print.helper()
        }

        else if (argv[0] === 'list') {
          this.list(data)
        }

        else if (argv[0] === 'list:created'){
          if (argv[1] === 'asc' || argv[1] === 'desc'){
            this.listSort(argv[1])
          }
          else {
            this.list()
          }
        }

        else if (argv[0] === 'list:completed') {
          this.completedList(data)
        }

        else if (argv[0] === 'tag') {
          if (argv[1].length == 0){
            Print.errorNoInput()
            Print.helper()
          }
          else {
            let argvSlice = argv.slice(2)
            this.tagNamed(data,argv[1],argvSlice)
          }
        }

        else if (arrSplit[0] === 'filter') {
            this.filterTag(data,arrSplit[1])
            // console.log(arrSplit[1]);
        }

        else if (argv[0] === 'add' && argv[1] != undefined ) {
          let arr = data
          arr.push({"id_list" : String(arr.length+1) , "todolist" : argv[1],"complete" : false, "craeatedAt" : new Date})
          TaskTodo.save(arr)
          Print.add(argv[1])

        }

        else if (argv[0] === 'task' && argv[1] != undefined ) {
          for (let i =0;i<data.length;i++){
            if (argv[counter] === data[i].id_list){
              Print.find(data[i].id_list,data[i].todolist)
            }
          }
        }

        else if (argv[0] === 'delete'){
          if(argv[1] === undefined){
            Print.helper()
          }
          else {
            for (let i =0;i<data.length;i++){
              if (argv[counter] === data[i].id_list){
                Print.hapus(data[i].todolist)
                data.splice(i,1)
                let arr = data
                TaskTodo.hapus(arr)
              }
            }
          }
        }

        else if (argv[0] === 'complete'){
          if(argv[1] === undefined){
            Print.helper()
          }
          else {
            console.log(data.length);
            for (let i =0;i<data.length;i++){
              if (argv[counter] === data[i].id_list){
                data[i].complete = true
                let arr = data
                TaskTodo.update(arr)
                this.list(data)
              }
            }
          }
        }

        else if (argv[0] === 'uncomplete'){
          if(argv[1] === undefined){
            Print.helper()
          }
          else {
            for (let i =0;i<data.length;i++){
              if (argv[counter] === data[i].id_list){
                data[i].complete = false
                let arr = data
                TaskTodo.update(arr)
                this.list(data)
              }
            }
          }
        }

  }

  static list(data){
    let counter = 1
      for(let i = 0; i< data.length;i++){
        if (data[i].complete == false){
            Print.list("[ ]",data[i].id_list,data[i].todolist)
        }
        else {
              Print.list("[X]",data[i].id_list,data[i].todolist)
        }
      }
    }

static listSort(type){
  let data = TaskTodo.bacaList()
  if (type === 'asc'){
    let sort = data.sort(function(a, b){
    var dateA =new Date(a.craeatedAt), dateB=new Date(b.craeatedAt)
    return dateA-dateB })
    this.list(sort)
    // console.log(sort);

  }
  else if (type === 'desc') {
    let sort = data.sort(function(a, b){
    var dateA =new Date(a.craeatedAt), dateB=new Date(b.craeatedAt)
    return dateB-dateA })
    this.list(sort)
  }
}

static completedList(data){
  let arr = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].complete === true){
      arr.push(data[i])
    }
  }
  this.list(arr)
}

static tagNamed(data,id,argvArr){
  for (let i = 0; i < data.length; i++) {
    if (data[i].id_list === id){
      data[i].tags = argvArr
      Print.printTag(data[i].todolist,argvArr)
      TaskTodo.update(data)
      // console.log(data);
    }
  }
}

static filterTag(data,tag){
  for (let i = 0; i < data.length; i++) {
    for(let j=0;j<data[i].tags.length;j++){
      if (data[i].tags[j] === tag){
        Print.printFilter(data[i].id_list,data[i].todolist,data[i].tags)
      }
      // else {
      //   Print.erorNoInput()
      // }
    }
  }
}

}

// console.log(Todos.listSort());
module.exports = Todos;
