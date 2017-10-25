const Index = require('../todo')
const View  = require('../views/view')
const Model = require('../models/model')

class Controller{

  static help(command){
    let input_command = command[0].toString().toLowerCase()
    let input_command_list = command[1]

    switch(input_command){
      case 'help' : View.help(); break;
      case 'list' : View.list(Model.to_do_list()); break;
      case 'add'  : Model.add_to_do_list(input_command_list); break;
    }
  }

}

module.exports = Controller
