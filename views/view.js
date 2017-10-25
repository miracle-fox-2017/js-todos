const Controller = require('../controllers/controller')
const Model      = require('../models/model')

class View{

  static help(){
    console.log(`\n===== HELP =====`)
    console.log(`1. list\n2. add <task_content>\n3. task <task_id>`)
    console.log(`4. delete <task_id>\n5. complete <task_id>\n6. uncomplete <task_id>\n`)
  }

  static list(to_do_list){
    console.log(`\n=== YOUR TO DO LIST ===\n\n${to_do_list}`); 
  }


}

module.exports = View
