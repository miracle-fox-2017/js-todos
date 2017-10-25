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
  static viewList(list){
    console.log(list);
  }
  static viewAdd(add){
    console.log(add);
  }
  static viewTask(task){
    console.log(task);
  }
  static viewDelete(delet){
    console.log(delet);
  }
  static viewComplete(complete){
    console.log(complete);
  }
  static viewUncomplete(uncomplete){
    console.log(uncomplete);
  }
  static viewCreated(created){
    console.log(created);
  }
  static viewCompleted(completed){
    console.log(completed);
  }
  static viewTag(tag){
    console.log(tag);
  }
  static viewFilter(filter){
    console.log(filter);
  }
}
module.exports = View;
