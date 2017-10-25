let Model = require('./model');
let View = require('./view');

class Controller {
  constructor(){

  }
  static showHelp(){
    View.showHelp();
  }
  static showError(){
    View.showError();
  }
  static showList(argv){
    let list = Model.getJson(argv);
    View.showList(list);
  }
  static addTask(argv){
    Model.getJson();
    let added = Model.addTask(argv);
    View.showAddList(added);
  }
  static findTaskId(argv){
    Model.getJson();
    let find = Model.findTaskId(argv);
    View.showFindTask(find)
  }
  static deleteTaskId(argv){
    Model.getJson();
    let del = Model.deleteTaskId(argv);
    View.showDeleteTask(del);
  }
  static completeTaskId(argv){
    Model.getJson();
    let completed = Model.completeTaskId(argv);
    View.showCompletedTaskId(completed)
  }
  static showUncompleteTask(argv){
    Model.getJson()
    let uncomplete = Model.uncompleteTaskId(argv);
    View.showUncompleteTask(uncomplete)
  }
  static listCreatedAt(argv){
    Model.getJson()
    let created = Model.listCreatedAt(argv);
    View.showCreatedAt(created)
  }
  static listCompletedAt(argv){
    Model.getJson()
    let completedAt = Model.listCompletedAt(argv);
    View.showCompletedAt(completedAt)
  }
  static addTag(argv,addTag){
    Model.getJson()
    let add = Model.addTag(argv,addTag);
    View.showTagged(add)
  }
  static listTaggedTask(argv){
    Model.getJson()
    let tagged = Model.listTaggedTask(argv);
    View.showTaggedTask(tagged)
  }
}

module.exports = Controller
