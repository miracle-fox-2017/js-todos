

class View{
  static viewHelp(){
    console.log('Available commands:');
    console.log('$ node todo.js');
    console.log('$ node todo.js help');
    console.log('$ node todo.js list');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js task <task_id>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');
    console.log('$ node todo.js uncomplete <task_id>');

  }
  static viewList(input){

    console.log(input);
  }

  static viewNewCommand(input){
    console.log('Added'+' '+input+' '+'to your TODO list...');
  }
  static viewFinding(input){
    console.log(input);
  }
  static viewDeleted(input){
    console.log('Deleted '+ input +' from your TODO list...');
  }
  static viewCompleted(input){
    console.log(input);
  }
}


module.exports=View
