let fs = require('fs')
let view = require('./view.js') //static
let data = require('./data.js')

// class data = ('./data')

class Controler {
  //class  implementasi todolistnya
  static callhelp(input){ //method yg memanggi kalo help
    if(input[0] == 'help'){
        view.help()
    }
    if(input[0] == 'list'){

      let model = data.readFile('data.json');
      view.list(model)
      // console.log(source);
    }
    if(input[0] == 'add'){
      let model = data.readFile('data.json')
      data.add_data(input.slice(1),'data.json')
      view.add(input.slice(1))
    }

    if(input[0] == 'find'){
      let model = JSON.parse(data.readFile('data.json'))
      for(let i = 0; i < model.length; i++ ){
        // console.log(model[i]);
        if(input[1] == model[i].id){
            view.find(model[i])
        }
      }
    }
    if(input[0] == 'delete'){
    let model = JSON.parse(data.readFile('data.json'))

    for(let i = 0; i < model.length; i++){
      if(input[1] == model[i].id){
          view.delete(model[i])
        }
      }
    }
  }
}


// let source = new data(readFile(), 'data.json')
let argv = process.argv.slice(2);
// console.log(argv);
Controler.callhelp(argv)
// if(argv[0] == 'help'){
//   Controler.callhelp()
// }
