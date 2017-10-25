
class View {
  constructor(){

  }
  static help(command){
    console.log('$ node todo.js');
    console.log('$ node todo.js help' );
    console.log('$ node todo.js list');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js task <task_id>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');
    console.log('$ node todo.js uncomplete <task_id>' );
  }

  static list(command){
    // return command
    console.log(command);
  }
  static find(command){
    console.log(command);
  }
  static delete(command){
    console.log(command);
  }
}

module.exports = View;
