class TodoView {
	constructor() {

	}

	static showHelp() {
		let helpContent = 'Please input your Tasks using following command:\n';
		helpContent += 'node todo.js\n';
		helpContent += 'node todo.js help\n';
		helpContent += 'node todo.js list\n';
		helpContent += 'node todo.js add <task_content>\n';
		helpContent += 'node todo.js task <task_id>\n';
		helpContent += 'node todo.js delete <task_id>\n';
		helpContent += 'node todo.js complete <task_id>\n';
		helpContent += 'node todo.js uncomplete <task_id>\n';

		console.log(helpContent);
	}

	static showMessage(msg) {
		console.log(msg);
	}

	static showAllTasks(tasks) {
		for (var i = 0; i < tasks.length; i++) {
			let checked = tasks[i].isComplete === true ? '[x]' : '[ ]';
			console.log(`${tasks[i].id}. ${checked} ${tasks[i].task}`);
		}
	}
}

module.exports = TodoView;