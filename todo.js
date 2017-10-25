const model = require('./model')
const view  = require('./view')

  class Todo{

    static masuk(str){
      if(str == 'help'){
         view.help()
      }
      else if (str == 'list') {
        let data = (model.baca())
         view.list(data)
      }
      else if (str == 'add') {
        let data = process.argv.slice(3,process.argv.length)
         model.add(data)
         view.add(data)
       }
    else if (str == 'task') {
      let data = process.argv.slice(3)
       view.find(model.find(data))
     }
     else if (str == 'delete') {
       let data = process.argv.slice(3)
       let output = model.baca()
       for (let i = 0; i < output.length; i++) {
        if(output[i].id == data){
           view.delete(output[i].task)
        }
       }
       model.delete(data)
     }

}

}
let pros = process.argv[2]
let input = Todo.masuk(pros)
// const argv = process.argv;
// console.log(argv);
//console.log(argv[2]);
// module.exports = Todo;
