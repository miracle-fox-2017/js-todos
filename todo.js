const View=require("./view");
const Model=require("./process");
const readCmd=process.argv.slice(2);
const command=readCmd.length == 0 ? ["help"] : readCmd;

// Call Model
const model=new Model();
const json=model.readJsonFile("data.json");

class Controller{
    constructor(command){
        this.command=command[0].split(":"); // Command dalam bentuk string
        this.specialCmd=this.command.length > 1 ? this.command[1] : false;
        this.content=command.slice(1); // Content dalam bentuk array
        this.commandList=["help","list","tag","filter","add","task","delete","complete","uncomplete"];
    }
    decision(){
        if(!this.commandList.includes(this.command[0])){ // Jika command tidak ditemukan dalam command list
            View.cmdNotFound(); // Maka akan memanggil method cmdNotFound yang akan memunculkan peringatan
        }else{
            const paramRequire=this.commandList.slice(2); // Others exclude help & list
            const general=this.commandList.slice(0,2); // Ex. help, list
            if(paramRequire.includes(this.command[0]) && this.content.length == 0){ // Jika command membutuhkan parameter & parameter kosong maka akan memunculkan peringatan
                View.contentEmpty();
            }else if(paramRequire.includes(this.command[0]) && this.content.length > 0){ // Jika command membutuhkan parameter & parameter tidak kosong
                switch(this.command[0]){
                    case "add":
                        model.addData(this.content);
                        break;
                    case "task":
                        const getTask=model.getTask(this.content);
                        if(!getTask){
                            View.notFound();
                        }else{
                            View.task(getTask);
                        }
                        break;
                    case "delete":
                        const hapus=model.delete(this.content);
                        View.delete(hapus);
                        break;
                    case "complete":
                        const selesai=model.setComplete(this.content);
                        View.completeState(selesai);
                        break;
                    case "uncomplete":
                        const belum=model.setUncomplete(this.content);
                        View.completeState(belum);
                        break;
                }
            }else if(general.includes(this.command[0])){ // Jika command tidak membutuhkan parameter
                if(this.command[0] == "help"){ // Jika command yang diinput adalah help
                    View.help();
                }else if(this.command[0] == "list"){ // Jika command yang diinput adalah list
                    if(this.specialCmd === false){ // Jika tidak ada parameter tambahan dalam pemanggilan command list
                        View.list(json);
                    }else{
                        const listParam=["created","completed"];
                        if(listParam.includes(this.specialCmd)){
                            const sorted=model.list(this.specialCmd,this.content.toString());
                            View.list(sorted);
                        }else{
                            View.cmdNotFound();
                        }
                    }
                }
            }
        }
    }
}

// Call Controller
const controller=new Controller(command);
controller.decision();
