const Control = require('./controller');
const file = 'data.json';

let control = new Control(file);
let argv = process.argv.slice(2);

control.menu(argv)