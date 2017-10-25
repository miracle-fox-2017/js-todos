class Tampilkan{
    static cmdNotFound(){
        console.log("Maaf command tidak ditemukan! Silakan ketik command 'help' untuk bantuan.");
    }
    static contentEmpty(){
        console.log("Silakan masukan parameter yang di inginkan sesuai command!");
    }
    static notFound(){
        console.log("Maaf data tidak ditemukan! Pastikan parameter yang anda masukan benar!");
    }
    // Start from here
    static help(){ // Tampilkan Help
        console.log("############ HELP CENTER ############\n");
        console.log("1. Command 'help'");
        console.log("==> Untuk mengakses help center\n");
        console.log("2. Command 'list'");
        console.log("==> Untuk memunculkan seluruh TODO list\n");
        console.log("3. Command 'add'");
        console.log("==> Untuk menambahkan data ke TODO list\n");
        console.log("4. Command 'task'");
        console.log("==> Untuk mengakses TODO list berdasarkan id\n");
        console.log("5. Command 'delete'");
        console.log("==> Untuk menghapus TODO list berdasarkan id\n");
        console.log("6. Command 'complete'");
        console.log("==> Untuk mengubah status uncomplete menjadi complete\n");
        console.log("7. Command 'uncomplete'");
        console.log("==> Untuk mengubah status complete menjadi uncomplete\n");
    }
    static list(data){ // Tampilkan List Data
        for(let i=0;i < data.length;i++){
            console.log(`ID : ${data[i].id} | Task : ${data[i].task} | Status : ${data[i].status}`);
        }
    }
    static task(hasil){ // Tampilkan task berdasarkan ID input
        console.log(`ID : ${hasil.id} | Task : ${hasil.task} | Status : ${hasil.status}`);
    }
    static delete(state){
        if(state){
            console.log("Data berhasil dihapus!");
        }else{
            this.notFound();
        }
    }
    static completeState(state){
        if(state === false){
            this.notFound();
        }else{
            for(let i=0;i < state.length;i++){
                const cond=state[i].status === true ? "X" : " ";
                console.log(`${i + 1}. [${cond}] ${state[i].task}`);
            }
        }
    }
}

module.exports=Tampilkan;
