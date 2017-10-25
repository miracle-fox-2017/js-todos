class View {
  constructor(){

  }
  static showHelp(){
    console.log('node index.js\nnode index.js help\nnode index.js list\nnode index.js add <task_content>\nnode index.js task <task_id>\nnode index.js delete <task_id>\nnode index.js complete <task_id>\nnode index.js uncomplete <task_id>\nnode index.js list:created <asc>\nnode index.js list:created <desc>\nnode index.js list:completed <asc>\nnode index.js list:completed <desc>\nnode index.js tag <tag_1> <tag_2> <...tag_N>\nnode index.js filter: <tag>')
  }
  static showError(){
    console.log('input: "node index.js help"')
  }
  static showList(list){
    console.log(list)
  }
  static showAddList(newTask){
    console.log(newTask);
  }
  static showFindTask(findTask){
    console.log(findTask)
  }
  static showDeleteTask(deleteTask){
    console.log(deleteTask)
  }
  static showCompletedTaskId(completedTask){
    console.log(completedTask);
  }
  static showUncompleteTask(uncompleteTask){
    console.log(uncompleteTask);
  }
  static showCreatedAt(createdAt){
    console.log(createdAt);
  }
  static showCompletedAt(completedAt){
    console.log(completedAt);
  }
  static showTagged(tagged){
    console.log(tagged);
  }
  static showTaggedTask(taggedTask){
    console.log(taggedTask);
  }
}

module.exports = View;
