const Model = require('./model')
const View = require('./view')

class Controller {
  static todo(command) {
    let args = command.slice(1)
    if(command[0] == 'help' || command[0] == null) {
      View.help()
    } else if(command[0] == 'list'){
      let listData = Model.readFile()
      View.listTask(listData)
    } else if(command[0] == 'add') {
      let addData = Model.addTask(args)
      View.addTask(addData)
    } else if(command[0] == 'task') {
      let taskData = Model.findTask(args)
      View.findTask(taskData)
    } else if(command[0] == 'delete') {
      let deleteData = Model.deleteTask(args)
      View.deleteTask(deleteData)
    } else if(command[0] == 'complete') {
      let completeData = Model.completeTask(args)
      View.listTask(completeData)
    } else if(command[0] == 'uncomplete') {
      let uncompleteData = Model.uncompleteTask(args)
      View.listTask(uncompleteData)
    }
    // View.notFound()
  }

}

module.exports = Controller
