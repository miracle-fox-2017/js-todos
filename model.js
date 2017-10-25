let fs = require('fs')

class Model {

    static baca(){
      let baca = JSON.parse(fs.readFileSync('data.json','utf-8').trim().split('\n'))
      return baca
    }


    static add(nambah){
      let newData = Model.baca()
      let obj = {id:newData[newData.length-1].id+1,com:false,task:nambah}
      newData.push(obj)
      let str =JSON.stringify(newData)
      fs.writeFileSync('data.json',str)
    }


    static delete(kurang){
      let delData = Model.baca()
      for (let i = 0; i < delData.length; i++) {
        if (delData[i].id == kurang) {
          delData.splice(i,1)
        }
      }
      let write = JSON.stringify(delData)
      fs.writeFileSync('data.json',write)
    }



    static find(cari){
      let data = Model.baca()
      for (let i = 0; i < data.length; i++) {
        if(data[i].id == cari){
          return data[i].id +'. '+data[i].task
        }
      }

    }
  }

  // console.log(Model.baca('data.json'));

 module.exports = Model ;
