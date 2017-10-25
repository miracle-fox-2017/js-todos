const View = require('../views/views');
const Model = require('../models/models');
class Controller {
  static listMenu(menu){
    let command = null
    if(!menu[0]){
      return View.viewHelp()
    } else {
      let getCase = menu[0].split(':')
      if(getCase[0]==='filter'){
        command = getCase
      } else {
        command = menu
      }
    }
    switch (command[0]) {
      case 'help':
          View.viewHelp()
        break;
      case 'list':
        let list = Model.modelList()
          View.viewList(list)
        break;
      case 'add':
        Model.modelAdd(command[1],(msg)=>{
          View.viewAdd(msg)
        })
        break;
      case 'task':
        let task = Model.modelTask(command[1])
          View.viewTask(task)
        break;
      case 'delete':
        Model.modelDelete(command[1], (msg)=>{
          View.viewDelete(msg)
        })
        break;
      case 'complete':
        Model.modelComplete(command[1], (msg)=>{
          View.viewComplete(msg)
        })
        break;
      case 'uncomplete':
        Model.modelUncomplete(command[1], (msg)=>{
          View.viewUncomplete(msg)
        })
        break;
      case 'list:created':
        let created_sort = Model.modelCreated(command[1])
        View.viewCreated(created_sort)
        break;
      case 'list:completed':
        let listCompleted = Model.modelCompleted(command[1])
          View.viewCompleted(listCompleted)
        break;
      case 'tag':
        let tag = menu.slice(2)
        Model.modelTag(command[1], tag, (msg)=>{
          View.viewTag(msg)
        })
        break;
      case 'filter':
        let datatag = Model.modelFilter(command[1])
            View.viewFilter(datatag)
        break;
      default:
        View.viewHelp()
        break;
    }
  }
}
module.exports = Controller;
