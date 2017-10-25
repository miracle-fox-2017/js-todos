// ini view

class Show {
  static help(){
    console.log('Available command');
    console.log('$ node todo.js help');
    console.log('$ node todo.js list');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js task <task_id>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');
    console.log('$ node todo.js uncomplete <task_id>');
  }

  static list(data){
    let jsonParse = JSON.parse(data)
    for (var i = 0; i < jsonParse.length; i++) {
      console.log(jsonParse[i])
    }
  }
}

module.exports = Show
