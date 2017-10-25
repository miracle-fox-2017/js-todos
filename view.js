class View {
  static printHelp() {
    console.log('available command :\nnode todo.js help \nnode todo.js list \nnode todo.js add (content) \nnode todo.js task (id) \nnode todo.js delete (id) \nnode todo.js complete (id) \nnode todo.js uncomplete (id)');
  }

  static logError() {
    console.log('command not found.\n\navailable command :\nnode todo.js help \nnode todo.js list \nnode todo.js add (content) \nnode todo.js task (id) \nnode todo.js delete (id) \nnode todo.js complete (id) \nnode todo.js uncomplete (id)');
  }

  static noArgProvided() {
    console.log(`Error, no argument provided`);
  }

  static systemError() {
    console.log(`Error, system having trouble`);
  }

  static argumentFalse() {
    console.log(`Error, argument false`);
  }

  static printList(data) {
    const completed = '[x]';
    const incomplete = '[ ]';
    // loop the data
    for (let value in data) {
      const status = data[value].status === 'completed' ? completed : incomplete;
      // log all data to console
      console.log(`${data[value].id}. ${status} ${data[value].task}` + '');
    }
  }

  static addDataSuccess(data) {
    // log success to console
    console.log(`Added "${data}" to your TODO list...`);
  }

  static findData(data, id) {
    // console.log(data.length);
    if (id === undefined || id === null) return 0;
    if (data.length === 0) return `No todo listed`;

    // loop the data
    for (let value in data) {
      // check the id and log task to console
      if (data[value].id === +id) {
        console.log(`${data[value].id}. ${data[value].task}` + '');
      }
    }

    return 1;
  }

  static deleteDataSuccess(task) {
    console.log(`Deleted "${task}" from your TODO list...`);
  }

  static completingTask(id) {
    console.log(`Data "${id}" has completed`);
  }

  static uncompletingTask(id) {
    console.log(`Data "${id}" is incomplete`);
  }
}

module.exports = View;