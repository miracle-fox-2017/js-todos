'use strict'
const fs = require('fs')

class Model{
	static readFile(file){
		let baca = fs.readFileSync(file, 'utf8')
		let json = JSON.parse(baca)
		return json
	}

	static addTask(file, data){
		// console.log(data)
		let insert = JSON.stringify(data)

		let write = fs.writeFileSync(file, insert, 'utf8')
		console.log('berhasil')
	}
}

module.exports = Model