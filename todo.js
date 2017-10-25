"use strict"
const View = require('./view');
const Model = require('./model');

class Controller {
  constructor() {
    this._model = new Model();
    this._view = new View();
  }

  executeMenu(option, contentOrID, tag1, tag2) {
    let data = this._model.getData();
    let status = false;
    let createDate = new Date();
    let completedDate = new Date();

    if (option == "help") {
      return this._view.displayHelp();
    } else if (option == "list") {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else {
        return this._view.displayList(data);
      }

    } else if (option == "add") {
      this._model.tambahData(data, contentOrID, status, createDate);
      return this._view.displayAdd(contentOrID);

    } else if (option == "task") {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else if (contentOrID > data.length) {
        return this._view.displayError(2);
      } else {
        return this._view.displayTask(data, contentOrID);
      }

    } else if (option == "delete") {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else if (contentOrID > data.length) {
        return this._view.displayError(2);
      } else {
        this._view.displayDelete(data, contentOrID);
        return this._model.hapusData(data, contentOrID);
      }
    } else {
      // console.log()
    }
  }

}

let argv = process.argv;
let option = argv[2];
let contentOrID = argv[3];
let tag1 = argv[4];
let tag2 = argv[5];
let controller = new Controller();

controller.executeMenu(option, contentOrID, tag1, tag2);