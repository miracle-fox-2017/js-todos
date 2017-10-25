let View= require ('./view.js')
let Model=require('./model')

class Controller {
  menu(command){
    switch (command[0]) {
      case 'help': View.help()
      break;
      case 'list': let dataList=Model.list()
      View.list(dataList)
      break;
      //dataList ---> view
      case 'add': let dataCommand = command[1]
      Model.add(dataCommand)
      break;

      case 'task':let dataTask=command[1]
      let modelFind=Model.find(dataTask)
      View.find(modelFind)
      break;

      case 'delete': let dataDelete=command[1]
      let modelDelete=Model.delete(dataDelete)

      View.delete(modelDelete)
      break
      default:
    }
  }

}

module.exports = Controller;
