const fs = require('fs');

class Model {
  static data() {
    return JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
  }

  static writeData(task) {
    // get the data
    const data = this.data();

    // get last data, push & write to file
    const lastData = data[data.length - 1];
    data.push({ id: lastData.id+1, task: task});
    fs.writeFileSync('./data.json', JSON.stringify(data));
    return 1;
  }

  static deleteData(id) {
    if (id === undefined || id === null) return 0;
    const data = this.data();
    let spliced = [];

    for (let value in data) {
      if (data[value].id === +id) {
        spliced = data.splice(value, 1);
      }
    }
    
    fs.writeFileSync('./data.json', JSON.stringify(data));
    return spliced[0].task;
  }

  static complete(id) {
    if (id === undefined || id === null) return 0;
    const data = this.data();

    for (let value in data) {
      if (data[value].id === +id) {
        data[value].status = 'completed';
      }
    }

    fs.writeFileSync('./data.json', JSON.stringify(data));
    return 1;
  }

  static uncomplete(id) {
    if (id === undefined || id === null) return 0;
    const data = this.data();

    for (let value in data) {
      if (data[value].id === +id) {
        data[value].status = 'uncomplete';
      }
    }

    fs.writeFileSync('./data.json', JSON.stringify(data));
    return 1;
  }
}

module.exports = Model;