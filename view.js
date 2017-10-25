class View {

	static displayHelp(data){
		data.forEach(help =>{
			console.log('$ node todo.js '+help);
		})
	}

	static displayTask(data){
		data.forEach(task =>{
			console.log(task);
		})
	}

	static displayAddTask(data){
		if(data){
			console.log(' Added "'+data+'" to your TODO list...');
		}else{
			console.log('Ada masalah bos');
		}
	}

	static displayDeleteTask(data){
		
		if(data){
			console.log(' Delete "'+data+'" from your TODO list...');
		}else{
			console.log('error tong');
		}
	}

	static displayCompleteTask(data){

		if(data){
			console.log('Complete "'+data+'" task...');
		}else{
			console.log('ada error tong');
		}
	}

	static displayUncompleteTask(data){

		if(data){
			console.log('Uncomplete "'+data+'" task...');
		}else{
			console.log('ada error tong');
		}
	}

	static displayTaggingTask(data){

		if(data){
			console.log('Tagged task "'+data[0]+'" with tags: '+data[1]);
		}else{
			console.log('ada error tong');
		}	
	}

}

module.exports = View