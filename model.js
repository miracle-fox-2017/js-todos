const fs=require('fs')
class Model {
  constructor(){

  }
  static list(){
    let bacaFile=fs.readFileSync('data.json','utf-8')
    let string =JSON.parse(bacaFile);
    let tampList=[]

    for (var i = 0; i < string.length; i++) {
      if(string[i].complete== true){
        tampList.push((i+1) + " " +"[x] " + string[i].todo)
      }else{
          tampList.push((i+1) + " " +"[ ] " + string[i].todo)
      }
    }
    return tampList.join('\n')
  }

  static listNorm(){
    let bacaFile=fs.readFileSync('data.json','utf-8')
    let string =JSON.parse(bacaFile);

    return string
  }

  static add(task){
    let data = Model.listNorm();
    // console.log(typeof data);
    // console.log("=====", data[data.length-1].id + 1);
    let newTask = {
      "id": (data[data.length-1].id+1),
      "todo": task,
      "complete": false
    }

    data.push(newTask);
    // console.log("=====", data);
    fs.writeFileSync('data.json', JSON.stringify(data,null,2), 'utf8')
  }

  static find(dataTask){
    let baca=Model.listNorm()
    // console.log(baca);
    let tampFind=[]
    for(var i=0;i<baca.length;i++){
      if(baca[i].id==dataTask){
        tampFind.push(baca[i])
      }
    }
    // }console.log(tampFind);
    return tampFind
  }

  static delete(dataDelete){
    let baca=Model.listNorm()
    // console.log(baca);
    for(var i=0;i<baca.length;i++){
      if(baca[i].id==dataDelete){
        baca.splice(i,1)
      }
    }
    // console.log(baca);
    fs.writeFileSync('data.json',JSON.stringify(baca,null,2),'utf8')
  }
}
module.exports = Model;

//controler ke view ke model
