let fs = require('fs')

  class view{ //release 0
    static help() {
      console.log('#will call help');
      console.log('list');
      console.log('add <task_content>');
      console.log('task <task_id');
      console.log('delete <task_id');
      console.log('complete <task_id');
      console.log('uncomplete <task_id');
    }
    static list(source){
      let json = JSON.parse(source)
      let tampung = []
      for(let i = 0; i < json.length; i++){
        console.log(json[i].id + " " + json[i].task);
      }
      // for(let i = 0; i < json.length; i++){
      //   console.log(json[i]);
      // }
      // console.log(json);
    }
    static add(input){
      console.log('added ' + input.join(' '));
    }
    static find(number){
      console.log(number.id + " " + number.task);
    }
    static delete(angka){
      console.log('deleted ' + angka.task);
    }
  }


module.exports = view
