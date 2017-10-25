const View=require("./view");
const Model=require("./process");
const readCmd=process.argv.slice(2);
const command=readCmd.length == 0 ? "help" : readCmd;

// Call Model
const model=new Model();
const json=model.readJsonFile("data.json");

class Controller{
    constructor(command){
        this.command=command[0]; // Command dalam bentuk string
        this.content=command.slice(1); // Content dalam bentuk array
        this.commandList=["help","list","add","task","delete","complete","uncomplete"];
    }
    decision(){
        if(!this.commandList.includes(this.command)){ // Jika command tidak ditemukan dalam command list
            View.cmdNotFound(); // Maka akan memanggil method cmdNotFound yang akan memunculkan peringatan
        }else{
            const paramRequire=this.commandList.slice(2); // Others exclude help & list
            const general=this.commandList.slice(0,2); // Ex. help, list
            if(paramRequire.includes(this.command) && this.content.length == 0){ // Jika command membutuhkan parameter & parameter kosong maka akan memunculkan peringatan
                View.contentEmpty();
            }else if(paramRequire.includes(this.command) && this.content.length > 0){ // Jika command membutuhkan parameter & parameter tidak kosong
                switch(this.command){
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
            }else if(general.includes(this.command)){ // Jika command tidak membutuhkan parameter
                switch(this.command){
                    case "help":
                        View.help();
                        break;
                    case "list":
                        View.list(json);
                        break;
                }
            }
        }
    }
}

// Call Controller
const controller=new Controller(command);
controller.decision();
