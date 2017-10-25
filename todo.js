const Data = require('./DataProccessing.js');
const View = require('./view.js')

class ToDo{
  constructor(input,result){
    this.input=input
    this.command=process.argv.slice(2)
    this.data = new Data().bacaFile()
    this.result=result
  }
   inputCommand (){
    if(this.command[0]=='help'||this.command[0]==''){
      View.viewHelp()
    }
    else if(this.command[0]=='list'){

      for(let i=0;i<this.data.length;i++){
        if(this.data[i].status == true){
        this.result=this.data[i].ID+'. '+'[x] '+this.data[i].task;
        View.viewList(this.result)
        }
        else{
          this.result=this.data[i].ID+'. '+'[ ] '+this.data[i].task;
          View.viewList(this.result)
        }
      }

    }
    else if(this.command[0]=='add'){
      new Data().addFile(this.command[1])
      View.viewNewCommand(this.command[1])
    }
    else if(this.command[0]=='find'){
      let result=this.data[Number(this.command[1])-1].ID+'. '+this.data[Number(this.command[1])-1].task
      View.viewFinding(result)
    }
    else if(this.command[0]=='delete'){
      View.viewDeleted(this.data[Number(this.command[1])-1].task)
      new Data().deleteFile(Number(this.command[1])-1)

    }
    else if(this.command[0]=='complete'){
      if(this.data[Number(this.command[1])].status == true){
        View.viewCompleted('You have completed this task');
      }
      else{
        new Data().completeFile(Number(this.command[1])-1)
        View.viewFile('You have succeded complete this task')
      }
    }
    else if(this.command[0]=='uncomplete'){
      if(this.data[Number(this.command[1])].status == false){
        View.viewCompleted('Yes, you haven\t completed this task');
      }
      else{
        new Data().incompleteFile(Number(this.command[1])-1)
        View.viewCompleted('Okay, you unchecklist this task');
        }
      }

  }
}

let command = new ToDo
command.inputCommand()
