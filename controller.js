const Model = require('./model')
const View = require('./view')

class Controller {
  static todo(command) {
    let args = command.slice(1)
    let command2 = command[0].split(':')
    // console.log(command);
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
    } else if(command[0] == 'list:created') {
      let listDataCreated = Model.listCreated(args)
      View.listTask(listDataCreated)
    } else if(command[0] == 'list:completed') {
      let listDataCompleted = Model.listComplited(args)
      View.listTask(listDataCompleted)
    } else if(command[0] == 'tag') {
      let tagData = Model.tagTask(args)
      View.tagTask(tagData)
    } else if(command2[0] == 'filter') {
      let filterData = Model.filterTag(command2[1])
      // console.log(filterData);
      View.filterTag(filterData)
    }
    // View.notFound()
  }

}

module.exports = Controller
