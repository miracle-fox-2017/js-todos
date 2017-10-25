const Tag = require('./tag');
const Task = require('./task');
const TodoModel = require('./todo-model');
const TodoView = require('./todo-view');

//Controller
class Todo {
	constructor(args) {

	}

	static getCommand(args) {
		let basicCommand = args[0];

		if (args.length === 0 || typeof args === 'undefined' || basicCommand === 'help') {
			TodoView.showHelp();
		} 
		// else  {
			// console.log('MASUK!');
			// if (basicCommand === 'list') {
			// 	console.log('Tampilkan data lewat Model');
			// }

			// if (basicCommand === 'add' && typeof args[1] !== 'undefined' && args[1].length > 0) {
			// 	console.log('Simpan data lewat Model');
			// }

			// if (args[0].length > 0 && isNaN(args[1]) === false) {
			// 	console.log('Simpan data lewat Model');
			// }
		// }
	}
}

let commands = process.argv.splice(2);
Todo.getCommand(commands);

