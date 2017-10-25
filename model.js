const fs = require('fs')

class Model {

  static bacaData() {

    var dataTask = fs.readFileSync('data.json', 'utf8')
    return dataTask

  }

  static parserJson() {

    return JSON.parse(this.bacaData())

  }

  static list() {

    return this.parserJson()

  }

  static getLastID(data) {

    var dataParse = this.parserJson()

    return dataParse[dataParse.length - 1].id

  }

  static add(taskname) {

    var dataParse = this.parserJson()

    var lastId = this.getLastID()

    var date = new Date()

    var obj = {

      id: lastId + 1,
      name: taskname,
      completed: false,
      created_date: date.toISOString(),
      completed_date: null

    }

    dataParse.push(obj)

    fs.writeFileSync('data.json', JSON.stringify(dataParse))

  }

  static find(cari) {

    var dataParse = this.parserJson()

    for(var i = 0; i < dataParse.length; i++) {
      if(dataParse[i].id == cari) {
        return dataParse[i]
      }
    }

  }

  static delete(data) {

    var dataParse = this.parserJson()

    for(var i = 0; i < dataParse.length; i++) {

      if(dataParse[i].id == data) {

        var hapus = dataParse.splice(i, 1)

      }

    }

    fs.writeFileSync('data.json', JSON.stringify(dataParse))

    return hapus

  }

  static sorting(mode) {

    var dataParse = this.parserJson()

    if(mode == 'asc') {

      dataParse.sort((a,b) => {

        if(a.created_date > b.created_date) {

          return 1

        }

        else {

          return -1

        }

      })

    } else if(mode == 'desc') {

      dataParse.sort((a,b) => {

        if(a.created_date > b.created_date) {

          return -1

        }

        else {

          return 1

        }

      })

    }

    return dataParse

  }

  static completed(data) {

    var dataParse = this.parserJson()
    var date = new Date()
    var nama = ''

    for(var i = 0; i < dataParse.length; i++) {

      if(dataParse[i].id == data) {

        dataParse[i].completed = true
        dataParse[i].completed_date = date.toISOString()
        nama = dataParse[i].name

      }

    }

    fs.writeFileSync('data.json', JSON.stringify(dataParse))

    return nama

  }

  static uncompleted(data) {

    var dataParse = this.parserJson()
    var nama = ''

    for(var i = 0; i < dataParse.length; i++) {

      if(dataParse[i].id == data) {

        dataParse[i].completed = false
        dataParse[i].completed_date = null
        nama = dataParse[i].name

      }

    }

    fs.writeFileSync('data.json', JSON.stringify(dataParse))

    return nama

  }

  static sortingByCompleted(mode) {

    var dataParse = this.parserJson()

    var taskCompleted = dataParse.filter((elemen) => {

      if(elemen.completed) {

        return true

      }

      else {

        return false

      }

    })

    if(mode == 'asc') {

      taskCompleted.sort((a , b) => {

        if(a.completed_date > a.completed_date) {

          return 1

        }

        else {

          return -1

        }

      })

    } else if(mode == 'desc') {

      taskCompleted.sort((a , b) => {

        if(a.completed_date > a.completed_date) {

          return -1

        }

        else {

          return 1

        }

      })

    }


    return taskCompleted

  }

  static addTag(id, data) {

    var dataParse = this.parserJson()
    var dataAddTag = []

    for(var i = 0; i < dataParse.length; i++) {

      if(dataParse[i].id == id) {

        dataAddTag = dataParse[i]

        data.forEach((elemen) => {

          dataParse[i].tag.push(elemen)

        })

      }

    }

    fs.writeFileSync('data.json', JSON.stringify(dataParse))

    return dataAddTag

  }

  static filterTag(data) {

    var dataParse = this.parserJson()

    var result = dataParse.filter((elemen) => {

      if(elemen.tag.indexOf(data) > -1) {

        return true

      }

      else {

        return false

      }

    })

    result.sort((a, b) => {

      if(a.created_date > b.created_date) {

        return 1

      }

      else {

        return -1

      }

    })

    return result

  }

}

module.exports = Model;
