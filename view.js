class View {
  static bantuan() {
    console.log('node todo.js help\nnode todo.js list\nnode todo.js add <task_content>\nnode todo.js task <task_id>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>\nnode todo.js uncomplete <task_id>');
    console.log('node todo.js list:created asc|desc');
    console.log('node todo.js list:completed asc|desc');
    console.log('node todo.js list:outstanding asc|desc');
    console.log('node todo.js tag <task_id> <tag_name_N>');
    console.log('node todo.js filter:<search>');
  }

  static tampilkanList(dataAll) {
    console.log(dataAll);
  }

  static tampilkanAdd(dataAll) {
    console.log(dataAll + 'berhasil ditambah di TODO list...');
  }

  static hasilDelete(data) {
    console.log(`Deleted ID ${data} from your TODO list...`);
  }

  static hasilPencarian(find) {
    console.log(find);
  }

  static showCreatedAt(createdAt) {
    console.log(createdAt);
  }

  static showCompletedAt(completedAt) {
    console.log(completedAt);
  }

  static showOuts(out) {
    console.log(out);
  }

  static showTag(out) {
    console.log(out + ' ditambah');
  }

  static filter(answer) {
    console.log(answer);
  }
}

module.exports = View;
