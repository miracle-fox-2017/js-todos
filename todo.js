const Controller = require('./controllers/controller');

let menu = process.argv.slice(2)
Controller.listMenu(menu)
