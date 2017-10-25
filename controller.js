const View = require('./view');
const Model = require('./model');

class Controller{
  constructor(file){
    this.file = file;
  }
  
  showHelp(){
    View.showHelp();
  }
  
  showList(){
    let read = Model.readFile(this.file);
    //tampilkan ke view
    View.showList(read);
  }
  
  addTask(task){
    //tampilkan ke view Added .... to your todolist
    View.showAddMsg(task);
    //di model tambahkan task
    Model.addTask(task, this.file);
    
  }
  
  findTask(id){
    //ambil data dari model
    let read = Model.readFile(this.file);
    let arr = [];
    for(let i = 0; i<read.length; i++){
      if(read[i].id == id){
        arr.push(read[i]);
      }
    }
    
    //kirim ke view untuk ditampilkan
    View.showList(arr);
  }
  
  deleteTask(id){
    //cari parameter id
    //ambil data dari model
    let read = Model.readFile(this.file);
    let arr = [];
    for(let i = 0; i<read.length; i++){
      if(read[i].id == id){
        arr.push(read[i]);
      }
    }
    //kirim ke view untuk ditampilkan
    View.deleteMsg(arr[0]);
    
    //kirim id ke model untuk di delete
    Model.deleteTask(id, this.file)
  }
  
  changeComplete(id){    
    // value id ke view untuk ditampilkan
    //ambil data dari model
    let read = Model.readFile(this.file);
    let arr = [];
    for(let i = 0; i<read.length; i++){
      if(read[i].id == id){
        arr.push(read[i]);
      }
    }
    //kirim ke view untuk ditampilkan
    View.completeMsg(arr[0]);
    
    //kirim ke model untuk dirubah filenya
    Model.completeTask(id, this.file)
  }
  
  changeUncomplete(id){    
    //ambil data dari model
    let read = Model.readFile(this.file);
    let arr = [];
    for(let i = 0; i<read.length; i++){
      if(read[i].id == id){
        arr.push(read[i]);
      }
    }
    //kirim ke view untuk ditampilkan
    View.uncompleteMsg(arr[0]);
    
    //kirim ke model untuk dirubah filenya
    Model.uncompleteTask(id, this.file)
  }
  
  showListCreated(sort){
    let sorted = Model.sortCreated(sort, this.file);
    
    //kirim ke view untuk ditampilkan
    View.showListC(sorted);
    
  }

  showListCompleted(sort){
    let sorted = Model.completed(sort, this.file);
    
    //kirim ke view untuk ditampilkan
    View.showListC(sorted);
  }
  
  tag(id, tagged){
    let myData = Model.tag(id, tagged, this.file);
    View.showTagged(myData);
  }
  
  filterTag(tag){
    let myData = Model.filterTag(tag, this.file);
    
    View.filtered(myData);
  }
  
  menu(command) {
    if(command.length == 0 || command[0] == 'help'){
      //help = showHelp()
      this.showHelp();
      
    } else if(command[0] == 'list'){
      //list = showList()
      this.showList();
      
    } else if(command[0] == 'add' && command[1]){
      //add = addTask(task)
      this.addTask(command.slice(1).join(' '));
      
    } else if(command[0] == 'find' && command[1]){
      //find = findTask
      this.findTask(command[1]);
      
    } else if(command[0] == 'delete' && command[1]){
      //delete = deleteTask
      // console.log('delete sekarang');
      this.deleteTask(command[1]);
      
    } else if(command[0] == 'complete' && command[1]){
      // complete = changeComplete
      this.changeComplete(command[1]);
      
    } else if(command[0] == 'uncomplete' && command[1]){
      // uncomplete = changeUncomplete
      this.changeUncomplete(command[1]);
      
    } else if(command[0] == 'list:created'){
      //list:created = showListCreated(command[1])
      this.showListCreated(command[1]);
      
    } else if(command[0] == 'list:completed'){
      //list:created = showListCreated(command[1])
      this.showListCompleted(command[1]);
      
    } else if(command[0] == 'tag' && command[1]){
      //tag = tag(command[1], command.slice(2))
      this.tag(command[1], command.slice(2));
      
    } else{
      // filter = filter(command[1]);
      if(command[0].slice(0,6) == 'filter'){
        this.filterTag(command[0].slice(7));
      }
      
      else {
        View.err();
      }
      
    } 
  }
  
}

module.exports = Controller;