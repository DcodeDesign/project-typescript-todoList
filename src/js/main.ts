
const list: Array<string> = new Array('test','test');
const listDelete: Array<string> = new Array();
let TitleDelete: HTMLElement ;
let flag: boolean= false;

startApp();

function startApp () {
    //LocalStorage();
    createElementApp();
    createToDoList();
}

function createElementApp () {
    var containerApp = document.createElement("div");
    containerApp.classList.add("container-app");
    containerApp.setAttribute("id", "appToDoList");
    document.body.appendChild(containerApp);

    var inputText = document.createElement("INPUT");
    inputText.setAttribute("placeholder", "todo...");
    inputText.setAttribute("id", "todo");
    document.getElementById("appToDoList").appendChild(inputText);
    inputText.style.border = "0px";
    inputText.style.borderBottom = "1px solid #747474";
    inputText.style.fontSize = "16px";
    inputText.style.outline = "0px solid white";

    var containerList = document.createElement("div");
    containerList.setAttribute("id", "contentList");
    inputText.parentNode.insertBefore(containerList, inputText.nextSibling);

    var todoList = document.createElement("ul");
    todoList.setAttribute("id", "todoList");
    document.getElementById("contentList").appendChild(todoList);
    todoList.style.margin = "0";
    todoList.style.marginTop = "10px";
    todoList.style.padding= "0";
    todoList.style.listStyle = "none";

    var containerListDelete = document.createElement("div");
    containerListDelete.setAttribute("id", "contentListDelete");
    containerList.parentNode.insertBefore(containerListDelete ,containerList.nextSibling);

    var todoListDelete = document.createElement("ul");
    todoListDelete.setAttribute("id", "todoListDelete");
    document.getElementById("contentListDelete").appendChild(todoListDelete);
    todoListDelete.style.margin = "0";
    todoListDelete.style.marginTop = "10px";
    todoListDelete.style.padding= "0";
    todoListDelete.style.listStyle = "none";
}

function createToDoList(): void {
    let todo: string;
    document.getElementById("todo").addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && (<HTMLInputElement>document.getElementById("todo")).value != undefined) {
           
            //// ACTION CREATE TODOLIST
            todo = (<HTMLInputElement>document.getElementById("todo")).value;
            list.unshift(todo);

            (<HTMLInputElement>document.getElementById("todo")).value = "";

            //// GENERATE TODOLIST
            var liList = document.createElement("li");
            liList.setAttribute("draggable","true");
            document.getElementById("todoList").prepend(liList);
            liList.style.display= "block";
            liList.style.marginTop = "5px";

            var pTodo = document.createElement("span");
            pTodo.innerHTML = list[0];
            liList.appendChild(pTodo);
            pTodo.style.marginLeft = "5px";
            pTodo.style.verticalAlign= "middle";
        
            let deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("class", 'delete');
            deleteBtn.innerHTML = "X";
            liList.prepend(deleteBtn);
            deleteBtn.style.borderRadius = "50%";
            deleteBtn.style.padding = "2px 4px";
            deleteBtn.style.display = "inline-block";
            deleteBtn.style.fontSize = "10px";
            deleteBtn.style.border = "1px solid grey";
            
            //// ACTION : DELETE TODOLIST
            deleteBtn.onclick = function(e: any) { 
                listDelete.unshift(e.target.nextSibling.innerText);
                list.splice(list.indexOf(e.target.nextSibling.innerText), 1);
                e.target.parentNode.remove();
                

                //// GENERATE TODOLISTDELETED
                setTimeout(function createTitleDelete(){
                    if(listDelete.length > 0 && flag === false){
                        TitleDelete= document.createElement("h3");
                        TitleDelete.innerHTML = "Todos complete";
                        document.getElementById("contentListDelete").prepend(TitleDelete);
                        TitleDelete.style.marginTop = "20px";
                        TitleDelete.style.marginBottom = "0";
                        flag = true;
                    }
                }, 1);

                var liListDelete = document.createElement("li");
                liListDelete.setAttribute("draggable","true");
                document.getElementById("todoListDelete").prepend(liListDelete);
                liListDelete.style.display= "block";
                liListDelete.style.marginTop = "5px";

                var pTodoDelete = document.createElement("span");
                pTodoDelete.innerHTML = e.target.nextSibling.innerText;
                liListDelete.appendChild(pTodoDelete);
                pTodoDelete.style.marginLeft = "5px"
                pTodoDelete.style.verticalAlign= "middle";

                let listdeleteBtn = document.createElement("button");
                listdeleteBtn.setAttribute("class", 'delete');
                listdeleteBtn.innerHTML = "X";
                liListDelete.prepend(listdeleteBtn);
                listdeleteBtn.style.borderRadius = "50%";
                listdeleteBtn.style.padding = "2px 4px";
                listdeleteBtn.style.display = "inline-block";
                listdeleteBtn.style.fontSize = "10px";
                listdeleteBtn.style.border = "1px solid grey";

                //// ACTION : DELETE TODOLISTDELETED
                listdeleteBtn.onclick = function(e: any) { 
                    listDelete.splice(listDelete.indexOf(e.target.nextSibling.innerText), 1);
                    e.target.parentNode.remove();
    
                    setTimeout(function greet(){
                       if(listDelete.length === 0){
                            TitleDelete.remove();
                            flag = false;
                       }
                    }, 1);
                }
            }
        }
    });
}

/* test
function LocalStorage(): void {

    let tarraylist: Array<string> = ["1","2","3"]
    
    window.localStorage.setItem('todoList', JSON.stringify(tarraylist));

    let array2J = JSON.parse(window.localStorage.getItem('todoList'));

    for (let k = 0; k < array2J.length; k++) {
        console.log(array2J[k]);
    }
}
*/