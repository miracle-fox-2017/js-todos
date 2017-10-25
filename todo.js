let Controller = require('./controller');

let intro = process.argv;
switch (process.argv[2]) {
  case 'help':
  Controller.ambilData();
  break;
  case 'list:created':
  switch (process.argv[3]) {
    case 'desc':
    Controller.listDesc();
    break;
    default:
    Controller.listAsc();
  }
  break;
  case 'list:completed':
  switch (process.argv[3]) {
    case 'desc':
    Controller.listCompleteDesc();
    break;
    default:
    Controller.listComplete();
  }
  break;
  case 'list:outstanding':
  switch (process.argv[3]) {
    case 'desc':
    Controller.listOutDesc();
    break;
    default:
    Controller.listOut();
  }
  break;
  case 'list':
  if (Controller._task !== []) {
    Controller.getList();
  } else {
    console.log('No list');
  }
  break;
  case 'add':
  taskData = '';
  for(let i = 3; i < process.argv.length; i++) {
    taskData += process.argv[i] + ' ';
  }
  Controller.addTodo(taskData);
  break;
  case 'tag':
  let arrTag = [];
  for (let i = 4; i < process.argv.length; i++) {
    arrTag.push(process.argv[i]);
  }
  Controller.tag(process.argv[3], arrTag);
  break;
  case "task":
  Controller.findTodo(process.argv[3]);
  break;
  case 'delete':
  Controller.hapusTodo(process.argv[3]);
  break;
  case 'complete':
  Controller.doneTodo(process.argv[3])
  break;
  break;
  case 'uncomplete':
  Controller.undoneTodo(process.argv[3])
  break;
  default:
  if (/filter:/.test(process.argv[2])) {
    let filterKey = process.argv[2].split(':')
    Controller.filter(filterKey[1])
  }
  else {
    Controller.ambilData();
  }
}
