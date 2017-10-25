class View
{
  static help()
  {
    console.log('Available commands:');
    console.log('$ node todo.js list');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js task <task_id>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');
    console.log('$ node todo.js uncomplete <task_id>');
  }
  static list(input)
  {
    let data = JSON.parse(input)
    for(let i = 0; i < data.length; i++)
    {
      console.log(`${data[i].id}. ${data[i].task}`)
      // console.log(data.length)
    }
    console.log('');
    // console.log(a.length)
  }
  static add(input)
  {
    console.log('Added ' + input + ' to your TODO list...')
  }
  static addAlert()
  {
    console.log('Please add a real task...')
  }
  static finder(input)
  {
    // console.log(JSON.parse(input));
    console.log(`${input.id}. ${input.task}`)
  }
}

module.exports = View
