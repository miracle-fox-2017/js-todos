class Views {

  static print(data) {
    console.log(data);
  }

  static printErrCommand() {
    console.log('Please complete your command!!!');
  }

  static help(input) {
    console.log(input);
  }

  static list(input) {
    for (var i = 0; i < input.length; i++) {
      console.log(input[i]);
    }
  }

  static listCompleted(input) {
    if(input.length == 0){
      console.log('No task completed!!!');
    }else{
      for (var i = 0; i < input.length; i++) {
        console.log(input[i]);
      }
    }
  }

  static add(newTask) {
    console.log(`Added "${newTask}" to your TOD list`);
  }

  static find(input) {
    if(input == undefined){
      console.log('task not found!!!');
    }else{
      console.log(input[0]);
    }
  }

  static delete(task) {
    if(task == undefined){
      console.log(`Task not found!!!`);
    }else{
      console.log(`Deleted "${task}" from your TODO list`);
    }
  }

  static complete(complete) {
    if(complete == undefined) {
      console.log(`Task not found!!!`);
    }else{
      console.log(`Good job, your task "${complete.task}" is completed`);
    }
  }

  static uncomplete(uncomplete) {
    if (uncomplete == undefined) {
      console.log(`Task not found!!!`);
    }else{
      console.log(`Task "${uncomplete.task}" is uncomplete`);
    }
  }

  static tag(tag) {
    console.log(`Tagged task "${tag[0].task}" with tags : ${tag[1]}`);
  }

  static filterTag(tag) {
    if(tag.length == 0){
      console.log('tag not found!!!');
    }else{
      for (var i = 0; i < tag.length; i++) {
        console.log(tag[i]);
      }
    }
  }
}

module.exports = Views;
