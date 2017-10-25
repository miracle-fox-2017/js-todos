"use strict"

// const Controller = require('./controller')
let fs = require('fs')
let data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

class Model {
    static modelList() {
        return data
    }

    static modelAdd(input) {
        let id = data[data.length - 1].id + 1
        let objData = {
            id: id,
            task: input,
            status: false,
            created_at: new Date(),
            completed_at: 'Z'
        }
        data.push(objData)
        let saveData = fs.writeFileSync('data.json', JSON.stringify(data))
        return saveData;
    }

    static modelTask(id) {
        let dataById;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                dataById = data[i]
            }
        }

        return dataById

    }
    static modelDelete(id) {
        let dataById
        let newData
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                dataById = data[i].task
                data.splice(data.indexOf(data[i]), 1)

            }
        }

        fs.writeFileSync('data.json', JSON.stringify(data))
        return dataById
    }

    static modelCompleted(id) {

        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id && data[i].status == false) {
                data[i].status = true
                data[i].completed_at = new Date()
                fs.writeFileSync('data.json', JSON.stringify(data))
                return data[i].task
            } else if (data[i].id == id && data[i].status == true) {
                return false;
            }
        }
        return 'kosong'

    }
    static modelUncompleted(id) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id && data[i].status == true) {
                data[i].status = false
                fs.writeFileSync('data.json', JSON.stringify(data))
                return data[i].task
            } else if (data[i].id == id && data[i].status == false) {
                return false;
            }
        }
        return 'kosong'
    }
    static modelCreatedAsc() {
        let dataAsc = data.sort(function (a, b) {
            if (a.created_at > b.created_at) {
                return 1
            } else {
                return -1
            }

        })

        return dataAsc


    }
    static modelCreatedDesc() {
        let dataDesc = data.sort(function (a, b) {
            if (a.created_at > b.created_at) {
                return -1
            } else {
                return 1
            }

        })

        return dataDesc
    }
    static modelCompletedAsc() {
        let dataAsc = data.sort(function (a, b) {
            if (a.completed_at > b.completed_at) {
                return 1
            } else {
                return -1
            }

        })
        // console.log(dataAsc)
        return dataAsc

    }
    static modelTag(input) {
        input = input.split(" ")
        let dataTags = []

        for (let j = 1; j < input.length; j++) {
            dataTags.push(input[j])
        }

        for (let i = 0; i < data.length; i++) {
            if (input[0] == data[i].id) {
                data[i].tags = dataTags
                fs.writeFileSync('data.json', JSON.stringify(data))
                return data[i]
            }
        }
        return false;

    }
    static modelFilter(input) {
        let dataFilter = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].tags) {
                if (data[i].tags.indexOf(input) !== -1) {
                    dataFilter.push(data[i])
                }
            }
        }
        let dataAsc = dataFilter.sort(function (a, b) {
            if (a.created_at > b.created_at) {
                return 1
            } else {
                return -1
            }

        })
        return dataAsc
    }

}

module.exports = Model