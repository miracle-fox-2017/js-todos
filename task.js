class Task {
	constructor(args) {
		this.id = args.id || Math.round(Math.random());
		this.task = args.task || '';
		this.isComplete = args.isComplete || false;
		this.tags = args.tags || [];
		this.created_at = args.created_at || new Date();
	}
}

module.exports = Task;