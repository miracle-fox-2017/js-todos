const Model = require('./model')
const View = require('./view')

class Controller {

  static menu(pilihan) {

    if(pilihan[0] == 'help' || pilihan[0] == null) {

      View.tampilkanhelp()

    }

    else if(pilihan[0] == 'list') {

      var data = Model.list()
      View.tampilkanListTask(data)

    }

    else if(pilihan[0] == 'add') {

      Model.add(pilihan[1])
      View.tampilkanAddTask(pilihan[1])

    }

    else if(pilihan[0] == 'task') {

      var data = Model.find(pilihan[1])
      View.tampilkanTask(data)

    }

    else if(pilihan[0] == 'delete') {

      var data = Model.delete(pilihan[1])

      View.tampilkanHapus(data)

    }

    else if(pilihan[0] == 'list:outstanding') {

      var data = Model.sorting(pilihan[1])

      View.tampilkanListTask(data)

    }

    else if(pilihan[0] == 'completed') {

      var data = Model.completed(pilihan[1])

      View.tampilkanPesanCompleted(data)

    }

    else if(pilihan[0] == 'uncompleted') {

      var data = Model.uncompleted(pilihan[1])

      View.tampilkanPesanUncompleted(data)

    }

    else if(pilihan[0] == 'list:completed') {

      var data = Model.sortingByCompleted(pilihan[1])

      View.tampilkanListTask(data)

    }

    else if(pilihan[0] == 'tag') {

      var data = Model.addTag(pilihan[1], pilihan.slice(2))
      View.tampilkanPesanAddTag(data)

    }

    else if(pilihan[0] == 'filter') {
      var data = Model.filterTag(pilihan[1])
      View.tampilkanListByTag(data)
    }

  }

}

module.exports = Controller;
