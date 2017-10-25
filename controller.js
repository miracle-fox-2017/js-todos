let Model = require('./model');
let View = require('./view');

class Controller {
  constructor(task, file) {
    this._task = task;
    this.lastId = 1;
    this.file = file;
  }

  static ambilData() {
    View.bantuan();
  }
  static getList() {
    let data = Model.dataList();
    View.tampilkanList(data);
  }

  static addTodo(task) {
    Model.addTask(task);
    View.tampilkanAdd(task);
  }

  static findTodo(find) {
    let hasilCari = Model.findTask(find);
    View.hasilPencarian(hasilCari)
  }

  static hapusTodo(hapus) {
    Model.delTask(hapus);
    View.hasilDelete(hapus);
  }

  static doneTodo(done) {
    Model.doneTask(done);
    let data = Model.dataList();
    View.tampilkanList(data);
  }

  static undoneTodo(undone) {
    Model.undoneTask(undone);
    let data = Model.dataList();
    View.tampilkanList(data);
  }

  static listAsc() {
    let completed = Model.listAscen();
    View.showCreatedAt(completed);
  }

  static listDesc() {
    let completed = Model.listDesc();
    View.showCreatedAt(completed);
  }

  static listComplete() {
    let completedAt = Model.listCompletedAt();
    View.showCompletedAt(completedAt)
  }

  static listCompleteDesc() {
    let completedAt = Model.listCompletedDesc();
    View.showCompletedAt(completedAt)
  }

  static listOut() {
    let outs = Model.listOut();
    View.showOuts(outs);
  }

  static listOutDesc() {
    let outs = Model.listOutDesc();
    View.showOuts(outs);
  }

  static tag(id, arrTag) {
    let tag = Model.tag(id, arrTag);
    View.showTag(tag);
  }

  static filter(key) {
    let answer = Model.filter(key);
    View.filter(answer);
  }

}

module.exports = Controller;
