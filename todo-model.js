"use strict"
var fs = require('fs');

class TodoModel {
	constructor(file) {
		this.file = file;
	}

	loadData() {
		let allTask = fs.readFileSync(this.file);

		return JSON.parse(allTask.toString());
	}

	saveData(strTask) {
		fs.writeFileSync(this.file, strTask, 'utf-8');
	}
}

module.exports = TodoModel;