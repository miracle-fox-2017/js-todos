const Tampil     = require('./view.js');
const ambilModel = require('./model.js');

class Command {
  static Perintah(input) {
    if(input == 'help') {
      Tampil.tampilkan();
    } else if(input == 'list') {
      Tampil.daftar(ambilModel.bacaFile());
    }
  }
}

let argv = process.argv.slice(2);

let user = Command.Perintah(argv);
let data = ambilModel.bacaFile();
