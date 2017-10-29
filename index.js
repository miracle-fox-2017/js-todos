let argv = process.argv;
let controller = require('./controller')

switch (argv[2]) {
  case 'help':
    controller.showHelp();
    break;
  case 'list':
    controller.showList();
    break;
  case 'add':
    let addTask = argv.slice(3)
    controller.addTask(addTask);
    break;
  case 'task':
    controller.findTaskId(argv[3]);
    break;
  case 'delete':
    controller.deleteTaskId(argv[3]);
    break;
  case 'complete':
    controller.completeTaskId(argv[3]);
    break;
  case 'uncomplete':
    controller.showUncompleteTask();
    break;
  case 'list:created':
    controller.listCreatedAt(argv[3]);
    break;
  case 'list:completed':
    controller.listCompletedAt(argv[3]);
    break;
  case 'tag':
    let addTag = argv.slice(4)
    controller.addTag(argv[3],addTag)
    break;
  case 'filter:':
    let filtering = argv.slice(3)
    controller.listTaggedTask(filtering)
    break;
  default:
    controller.showError();
    break;
}
