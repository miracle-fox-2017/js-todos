const Model = require('./model')
const View = require('./view')

class Controller {
  constructor() {

  }

  static todo(command, arg) {
    if(command == 'help' || command == null) {
      View.help()
    }
  }

}

module.exports = Controller
