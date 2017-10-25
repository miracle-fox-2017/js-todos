const fs = require('fs')

class Data {
constructor(idnum,task){
  this.file=[];
  this.id=idnum;
  this.task=task;

}
bacaFile(){
  this.file=JSON.parse(fs.readFileSync('./data.json','utf-8'))
  return this.file
}
addFile(input){
  this.bacaFile()
  let obj={
    ID:this.file.length+1, task: input
  }

   this.file.push(obj)
  //  console.log(this.file);
   fs.writeFileSync('./data.json',JSON.stringify(this.file))
}

}


module.exports = Data
// let data = new Data()
// data.bacaFile()
// console.log(data.writeFile());
// data.objData());
