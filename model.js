
const fs = require('fs');
class Model {
    constructor() {
      this._filename = "./data.json";
    }
  
    getData() {
      let data = fs.readFileSync(this._filename, "utf8");
      let listData = JSON.parse(data);
      return listData;
    }
  
    tambahData(data, taskContent) {
      data.push({"task": taskContent});
      let json = JSON.stringify(data);
      fs.writeFileSync('data.json', json, 'utf8');
    }
  
    hapusData(data, taskID) {
      let index = Number(taskID-1);
      data.splice(index, 1);
      let json = JSON.stringify(data);
      fs.writeFileSync('data.json', json, 'utf8');
    }
  
    tambahTag(data, taskID, tag1) {
      let id = Number(taskID-1);
      data[id]["tag"] = [tag1];
      let json = JSON.stringify(data);
      fs.writeFileSync('data.json', json, 'utf8');
    }
  
    tambahTag2(data, taskID) {
      let id = Number(taskID-1);
      data[id]["tag"] = [tag1];
      data[id]["tag"].push(tag2);
      let json = JSON.stringify(data);
      fs.writeFileSync('data.json', json, 'utf8');
    }
  }

  module.exports = Model;