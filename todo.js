'use strict'
const Controller = require('./controller')

let argv = process.argv.slice(2)
// console.log(argv)

let controller = new Controller(argv, 'data.json')

controller.view_menu()
// console.log(controller)