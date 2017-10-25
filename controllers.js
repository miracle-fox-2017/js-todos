const Models = require('./models')
const Views = require('./views')
let models = new Models('data.json')

class Controllers {
  constructor() {
  }

  commandHandle(command) {
    let cmd
    if(/\w:\w/g.test(command[0])){
      cmd = command[0].split(':')
    }else{
      cmd = command
    }
    switch (cmd[0]) {
      case 'help':
        Views.help(models.help.join('\n'))
        break;
      case 'list':
        if(cmd[1] == 'created'){
          Views.list(models.createdSort(command[1]))
        }else if(cmd[1] == 'completed'){
          Views.listCompleted(models.completedSort(command[1]))
        }else if(!cmd[1]){
          Views.list(models.readList())
        }
        break;
      case 'add':
        if(command[1]){
          Views.add(models.addFile(command.slice(1).join(' ')))
        }else{
          Views.printErrCommand()
        }
        break;
      case 'task':
        if(command[1]){
          Views.find(models.findTask(command[1]))
        }else{
          Views.printErrCommand()
        }
        break;
      case 'delete':
        if(command[1]){
          Views.delete(models.delTask(command[1]))
        }else{
          Views.printErrCommand()
        }
        break;
      case 'complete':
      if(command[1]){
          Views.complete(models.completeTask(command[1]))
        }else{
          Views.printErrCommand()
        }
        break;
      case 'uncomplete':
        if(command[1]){
          Views.uncomplete(models.uncompleteTask(command[1]))
        }else{
          Views.printErrCommand()
        }
        break;
      case 'tag':
        if(command[1]){
          Views.tag(models.addTag(command[1],command.slice(2)))
        }else{
          Views.printErrCommand()
        }
        break;
      case 'filter':
        if(cmd[1]){
          Views.filterTag(models.findByTag(cmd[1], command[1]))
        }else{
          Views.printErrCommand()
        }
        break;
      default:
        Views.help(models.help.join('\n'))
        break;
    }
  }
}

module.exports = Controllers;
