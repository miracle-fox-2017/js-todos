const fs = require('fs');

class Model {
  static bacaFile() {
    return fs.readFileSync('data.json','utf-8');
  }
}

module.exports = Model;
