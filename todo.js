const model = require('./data.js')
const view = require('./view.js')

//view.tampilkanData(model.bacaFile('data.json'))
class Todo{
  static list(){
      let data = model.bacaFile()
      view.list(data)
  }
   static add(task_content){
     model.add(task_content)
     view.add(task_content)

   }
   static help(){
     view.help()
   }
   static find(id){
     let data = model.bacaFile()
     view.find(data,id)
   }
   static deleteList(id){

     model.deleteList(id)
   }

   static menu(argv){
     if(argv[0]==='help'){
       Todo.help()
     }else if(argv[0]=='list'){
       let data = model.bacaFile()
       Todo.list(data)
     }else if(argv[0]=='add'){
       Todo.add(argv[1])
     }else if(argv[0]=='task'){
       let data = model.bacaFile()
       Todo.find(argv[1])
     }else if(argv[0]=='delete'){
       Todo.deleteList(argv[1])
     }
   }
}

let argv = process.argv.slice(2)
Todo.menu(argv)

//console.log(model.bacaFile('data.json'))
