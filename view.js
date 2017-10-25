class View {
  constructor() {

  }

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
    );
  }
}

module.exports = View;
