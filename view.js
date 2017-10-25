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
      'node todo.js uncomplete <task_id>'
    )
  }

  static list(data) {
    // console.log(data);
    for(let i = 0; i < data.length; i++) {
      console.log(`${data[i].id}. ${data[i].task}`);
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
