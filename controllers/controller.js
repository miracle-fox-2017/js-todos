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

        break;
      case 'add':

        break;
      case 'task':

        break;
      case 'delete':

        break;
      case 'complete':

        break;

      default:

    }
  }
}
module.exports = Controller;
