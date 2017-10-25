class View {
  static help() {
    console.log(
      'node todo.js\n' +
      'node todo.js help\n' +
      'node todo.js list\n' +
      'node todo.js add <task_content>\n' +
      'node todo.js task <task_id>\n' +
      'node todo.js delete <task_id>\n' +
      'node todo.js complete <task_id>\n' +
      'node todo.js uncomplete <task_id>' +
      'node todo.js list:created asc|desc' +
      'node todo.js list:completed asc|desc' +
      'node todo.js tag <task_id> <tag_name_1> <tag_name_2 ... <tag_name_N>' +
      'node todo.js filter:<tag_name>'
    )
  }

  static listTask(data) {
    for(let i = 0; i < data.length; i++) {
      if (data[i].complete == true) {
        console.log(`${data[i].id}. [x] ${data[i].task}`);
      } else {
        console.log(`${data[i].id}. [ ] ${data[i].task}`);
      }
    }
  }

  static addTask(data) {
    console.log(`Added ${data.task} to your TODO list...`);
  }

 static findTask(data) {
   console.log(`${data.id}. ${data.task}`);
 }

 static deleteTask(data) {
   console.log(`Deleted ${data.task} from your TODO list...`);
 }

  static notFound() {
    console.log('todo.js : command not found');
  }
}

module.exports = View;
