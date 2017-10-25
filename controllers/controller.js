const View = require('../views/views');
const Model = require('../models/models');
class Controller {
  constructor() {

  }

  static listMenu(menu){
    switch (menu[0]) {
      case 'help':
          View.viewHelp()
        break;
      case 'list':
        let list = Model.modelList()
          View.viewList(list)
        break;
      case 'add':
        Model.modelAdd(menu[1],(msg)=>{
          View.viewAdd(msg)
        })
        break;
      case 'task':
        let task = Model.modelTask(menu[1])
          View.viewTask(task)
        break;
      case 'delete':
        Model.modelDelete(menu[1], (msg)=>{
          View.viewDelete(msg)
        })
        break;
      case 'complete':
        Model.modelComplete(menu[1], (msg)=>{
          View.viewComplete(msg)
        })
        break;
      case 'uncomplete':
        Model.modelUncomplete(menu[1], (msg)=>{
          View.viewUncomplete(msg)
        })
        break;
      case 'list:created':
        let created_sort = Model.modelCreated(menu[1])
        View.viewCreated(created_sort)
        break;
      case 'list:completed':
        let listCompleted = Model.modelCompleted(menu[1])
          View.viewCompleted(listCompleted)
        break;
      case 'tag':
        let tag = menu.slice(2)
        Model.modelTag(menu[1], tag, (msg)=>{
          View.viewTag(msg)
        })
        break;
      case ' ':
        View.viewHelp()
        break;
      default:
      let data = menu[0].split(':')
      if(data[0] === 'filter'){
        let list = Model.modelFilter(data[1])
          View.viewFilter(list)
      } else {
        View.viewHelp()
      }

    }
  }
}
module.exports = Controller;
