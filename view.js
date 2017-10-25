class View {
  static tampilkan() {
    console.log('Command that you can choose');
    console.log('node.todo.js help');
    console.log('node.todo.js list');
    console.log('node.todo.js add <task content>');
    console.log('node.todo.js task <task_id>');
    console.log('node.todo.js delete <task_id>');
    console.log('node.todo.js complete <task_id>');
    console.log('node.todo.js uncomplete <task_id>');
  }

  static daftar(data) {
    let a = JSON.parse(data);
    for(let i = 0 ; i < a.length ; i++) {
        console.log(a[i]);
    }
  }
}

module.exports = View;
