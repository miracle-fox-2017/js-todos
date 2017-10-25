"use strict"
const View = require('./view')
const Model = require('./model')

class Controller {
    static controllerMenu(input) {
        let inputMenu = input[0]
        let dataInput = input.slice(1, input.length).join(" ")
        switch (inputMenu) {
            case 'help':
                View.viewHelp()
                break;
            case 'list':
                let list = Model.modelList()
                View.viewList(list)
                break;
            case 'add':
                Model.modelAdd(dataInput)
                View.viewAdd(dataInput)
                break;
            case 'task':
                let dataHasil = Model.modelTask(dataInput)
                View.viewTask(dataHasil)
                break;
            case 'delete':
                let dataDelete = Model.modelDelete(dataInput)
                View.viewDelete(dataDelete)
                break;
            case 'completed':
                let dataComplete = Model.modelCompleted(dataInput)
                View.viewCompleted(dataComplete)
                break;
            case 'uncompleted':
                let dataUncomplete = Model.modelUncompleted(dataInput)
                View.viewUncompleted(dataUncomplete)
                break;
            case 'list:created_asc':
                let dataCreatedAsc = Model.modelCreatedAsc()
                View.viewCreatedAsc(dataCreatedAsc)
                break;
            case 'list:created_desc':
                let dataCreatedDesc = Model.modelCreatedDesc()
                View.viewCreatedDesc(dataCreatedDesc)
                break;
            case 'list:completed':
                let dataCompletedAsc = Model.modelCompletedAsc()
                View.viewCompletedAsc(dataCompletedAsc)
                break;
            case 'tag':
                let dataTag = Model.modelTag(dataInput)
                View.viewTag(dataTag)
                break;
            case 'filter':
                let dataFilter = Model.modelFilter(dataInput)
                View.viewFilter(dataFilter)
                break;
            default:
                console.log("Menu is incorrect !")
                break;
        }

    }

}
module.exports = Controller