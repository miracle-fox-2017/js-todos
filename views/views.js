class View {
  constructor() {

  }
  static viewHelp(){
    console.log('node todo.js help');
    console.log('node todo.js list');
    console.log('node todo.js add <task_content>');
    console.log('node todo.js task <task_id>');
    console.log('node todo.js delete <task_id>');
    console.log('node todo.js complete <task_id>');
    console.log('node todo.js uncomplete <task_id>');
  }
}
module.exports = View;
