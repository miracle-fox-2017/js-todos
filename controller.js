const Model = require('./model')
const View = require('./view')

class Controller {
  static todo(command) {
    let args = command.slice(1)
    if(command[0] == 'help' || command[0] == null) {
      View.help()
    } else if(command[0] == 'list'){
      let listData = Model.readFile()
      View.list(listData)
    } else if(command[0] == 'add') {
      let addData = Model.addTask(args)
      View.addTask(addData)
    } else if(command[0] == 'task') {
      let taskData = Model.findTask(args)
      View.findTask(taskData)
    } else if(command[0] == 'delete') {
      let updateData = Model.deleteTask(args)
      // console.log(updateData);
      View.deleteTask(updateData)
    }
    // View.notFound()
  }

}

module.exports = Controller
