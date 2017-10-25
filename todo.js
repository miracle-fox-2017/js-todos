const argv = process.argv;
const View = require('./view');
const Model = require('./model');

// check for command
switch(argv[2]) {
  case 'help':
  case undefined:
    // log command to console
    View.printHelp();
    break;
  case 'list':
    // log list to console
    View.printList(Model.data());
    break;
  case 'add':
    // check if no argument
    if (argv.length < 4) return View.noArgProvided();
    // get the task
    const task = argv.slice(3, argv.length).join(' ');
    // write the task and respond to user
    Model.writeData(task) ? View.addDataSuccess(task) : View.systemError();
    break;
  case 'task':
    // find data, if no argument log error
    argv[3] ? View.findData(Model.data(), argv[3]) : View.noArgProvided();
    break;
  case 'delete':
    const result = Model.deleteData(argv[3]);

    result ? View.deleteDataSuccess(result) : View.noArgProvided();
    break;
  case 'complete':
    Model.complete(argv[3]) ? View.completingTask(argv[3]) : View.noArgProvided();
    break;
  case 'uncomplete':
    Model.uncomplete(argv[3]) ? View.uncompletingTask(argv[3]) : View.noArgProvided();
  break;
  default:
    View.logError();
}
