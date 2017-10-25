class View {
    constructor() { 
    } 
    displayHelp() {
      console.log("Help Menu:");
      console.log("Type:");
      console.log("'list'");
      console.log("'add' <task_content>");
      console.log("'task' <task_id>");
      console.log("'delete' <task_id>");
      console.log("'tag' <task_id> <tag_name1> <tag_name2>");
      console.log("'completed' <task_id>");
      console.log("'uncomplete' <task_id>");
    }
  
    displayList(data) {
      return data.forEach((element, index) => {
        if (element.completed === true) {
          console.log(`${index+1}. ${element.task}`);
        } else {
          console.log(`${index+1}. ${element.task}`);
        }
      });
    }
  
    displayAdd(taskContent) {
      console.log(`Task "${taskContent}" has been successfully added`);
    }
  
    displayTask(data, taskID) {
      let id = Number(taskID-1);
      console.log(data[id]["task"]);
    }
  
    displayDelete(data, taskID) {
      let id = Number(taskID-1);
      let taskName = data[id]["task"];
      console.log(`Task "${taskName}" has been successfully removed`);
    }
  
    displayTag(data, taskID, tag1) {
      let id = Number(taskID-1);
      let taskName = data[id]["task"];
      console.log(`Tagged task "${taskName}" with tag: ${tag1}`);
    }
  
    displayTag2(data, taskID, tag1, tag2) {
      let id = Number(taskID-1);
      let taskName = data[id]["task"];
      console.log(`Tagged task "${taskName}" with tags: ${tag1}, ${tag2}`);
    }
  }

  module.exports = View;