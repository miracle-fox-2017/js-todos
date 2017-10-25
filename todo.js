const Data = require('./DataProccessing.js');
const View = require('./view.js')

class ToDo{
  constructor(input,str){
    this.input=input
    this.str=str
    this.command=process.argv.slice(2)
    this.data = new Data().bacaFile()
  }
   inputCommand (){
    if(this.command[0]=='help'||this.command[0]==''){
      View.viewHelp()
    }
    else if(this.command[0]=='list'){
      let result=''
      for(let i=0;i<this.data.length;i++){
        result=this.data[i].ID+'. '+this.data[i].task;
        View.viewList(result)
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
  }

}

let command = new ToDo
command.inputCommand()
