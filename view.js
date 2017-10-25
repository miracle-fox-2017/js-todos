class View {

  static tampilkanhelp() {

    console.log('node todo.js')
    console.log('node todo.js help')
    console.log('node todo add <task_content>')
    console.log('node todo.js task <task id>')
    console.log('node todo.js delete <task_id>')
    console.log('node todo.js complete <task_id>')
    console.log('node todo.js uncomplete <task_id>');

  }

  static tampilkanListTask(data) {

    data.forEach((elemen) => {

      if(elemen.completed) {
        console.log(`[x] ${elemen.id}. ${elemen.name}`);
      }

      else {
        console.log(`[ ] ${elemen.id}. ${elemen.name}`);
      }
    })

  }

  static tampilkanAddTask(data) {

    console.log(`Added ${data} to your TODO list`);

  }

  static tampilkanTask(data) {

    if(data.completed) {

      console.log(`[x] ${data.id}. ${data.name}`)

    }
    else {

      console.log(`[ ] ${data.id}. ${data.name}`)

    }

  }

  static tampilkanHapus(data) {

    console.log(`Deleted "${data[0].name}" from your TODO list`);

  }

  static tampilkanPesanCompleted(data) {

    console.log(`${data} has completed`);

  }

  static tampilkanPesanUncompleted(data) {

    console.log(`${data} has changed to uncompleted`);

  }

  static tampilkanPesanAddTag(data) {

    console.log(`Tagged task "${data.name}" with tags: ${data.tag.join(',')}`);

  }

  static tampilkanListByTag(data) {

    data.forEach((elemen) => {

      console.log(`${elemen.id} ${elemen.name} [${elemen.tag}]`);

    })

  }

}

module.exports = View;
