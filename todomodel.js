const fs = require('fs')
class Model{
	static readFile(filename){
		let arr = fs.readFileSync(filename).toString();
		return arr = JSON.parse(arr);
	}
	static saveFile(filename, save){
		save = JSON.stringify(save)
		fs.writeFileSync(filename,save)
	}
}

module.exports = Model	


// console.log(a.sort(function(x,y){
// 	return new Date(y.date) - new Date(x.date)
//  }))