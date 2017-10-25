const Controller = require('./controller')

class Todo{
	static readInput(input){
		Controller.processInput(input)
	}

	static argv(){
		let input = []
		process.argv.forEach((val, index) => {
  			if(index>1){
  				input.push(val)
  			}
		});

		this.readInput(input)		
	}
}

Todo.argv()

