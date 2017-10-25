
class View {


    static viewHelp() {
        console.log("=====Menu=====")
        console.log("node todo.js")
        console.log("1. node todo.js help")
        console.log("2. node todo.js list")
        console.log("3. node todo.js add <task_content>")
        console.log("4. node todo.js task <task_id>")
        console.log("5. node todo.js delete <task_id>")
        console.log("6. node todo.js completed <task_id>")
        console.log("7. node todo.js uncompleted <task_id>")
        console.log("8. node todo.js list:created_asc")
        console.log("9. node todo.js list:created_desc")
        console.log("10. node todo.js list:completed")
        console.log("11. node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>")
        console.log("12. node todo.js filter <tag_name>")
    }
    static viewList(input) {
        input.forEach((dataInput) => {
            if (dataInput.status) {
                console.log(`${dataInput.id}. [X] ${dataInput.task}`)
            } else {
                console.log(`${dataInput.id}. [ ] ${dataInput.task}`)
            }
        });
    }
    static viewAdd(input) {
        console.log(`Added "${input}" to your TODO list... `)
    }
    static viewTask(input) {
        if (input) {
            if (input.status) {
                console.log(`${input.id}. [X] ${input.task}`)
            } else {
                console.log(`${input.id}. [ ] ${input.task}`)
            }

        } else {
            console.log("No data available with that id!")
        }

    }
    static viewDelete(input) {
        if (input) {
            console.log(`Deleted "${input}" to your TODO list... `)
        } else {
            console.log("No data available with that id!")
        }

    }
    static viewCompleted(input) {
        if (!input) {
            console.log("Task has already been completed. Choose another task!")
        } else if (input == 'kosong') {
            console.log("No data available with that id")
        } else {
            console.log(`List "${input}" successfully completed!`)
        }
    }
    static viewUncompleted(input) {
        if (!input) {
            console.log("Task has already been uncompleted. Choose another task!")
        } else if (input == 'kosong') {
            console.log("No data available with that id")
        } else {
            console.log(`List "${input}" successfully uncompleted!`)
        }
    }
    static viewCreatedAsc(input) {
        input.forEach((dataInput) => {
            if (dataInput.status) {
                console.log(`${dataInput.id}. [X] ${dataInput.task}`)
            } else {
                console.log(`${dataInput.id}. [ ] ${dataInput.task}`)
            }
        });
    }
    static viewCreatedDesc(input) {
        input.forEach((dataInput) => {
            if (dataInput.status) {
                console.log(`${dataInput.id}. [X] ${dataInput.task}`)
            } else {
                console.log(`${dataInput.id}. [ ] ${dataInput.task}`)
            }
        });
    }
    static viewCompletedAsc(input) {
        input.forEach((dataInput) => {
            if (dataInput.status) {
                console.log(`${dataInput.id}. [X] ${dataInput.task}`)
            } else {
                console.log(`${dataInput.id}. [ ] ${dataInput.task}`)
            }
        });
    }
    static viewTag(input) {
        if (input) {
            console.log(`Tagged task "${input.task}" with tags : ${input.tags}  `)
        } else {
            console.log("No data available with that id!")
        }

    }
    static viewFilter(input) {

        if (input.length == 0) {
            console.log("No data available with that tags!")
        } else {
            input.forEach((dataInput) => {
                if (dataInput.status) {
                    console.log(`${dataInput.id}. [X] ${dataInput.task} [${dataInput.tags}]`)
                } else {
                    console.log(`${dataInput.id}. [ ] ${dataInput.task} [${dataInput.tags}]`)
                }
            });
        }

    }

}

module.exports = View