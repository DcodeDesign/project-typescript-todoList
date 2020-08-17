import { Todo } from "./Todo";
export class TodoList extends Todo {
    private _todo: string;
    private liList: HTMLElement;
    private pTodo: HTMLElement;
    private deleteBtn: HTMLElement;
    private liListDelete: HTMLElement;
    private pTodoDelete: HTMLElement;
    private listdeleteBtn: HTMLElement;

    constructor() {
        super();
        this.ActionInputkeypress();
    }

    private todo (todoText: string) : any {
        if (todoText === "") {
            //throw new Error("Todo is empty");
        }
        this._todo = todoText;
    }

    private dataSaveTodoList () : any {
        this.list.unshift(this._todo);
    }

    public emptyFeildInput () : any {
        this.inputText.value = "";
    }

    public dataDeleteTodoList(e: any) : any {
        this.listDelete.unshift(e.target.nextSibling.innerText);
        this.list.splice(this.list.indexOf(e.target.nextSibling.innerText), 1);
    }

    public ViewTodoList() : any {
        this.liList = document.createElement("li");
        this.liList.setAttribute("draggable", "true");
        this.todoList.prepend(this.liList);
        this.liList.style.display = "block";
        this.liList.style.marginTop = "5px";

        this.pTodo = document.createElement("span");
        this.pTodo.innerHTML = this.list[0];
        this.liList.appendChild(this.pTodo);
        this.pTodo.style.marginLeft = "5px";
        this.pTodo.style.verticalAlign = "middle";

        this.deleteBtn = document.createElement("button");
        this.deleteBtn.setAttribute("class", 'delete');
        this.deleteBtn.innerHTML = "X";
        this.liList.prepend(this.deleteBtn);
        this.deleteBtn.style.borderRadius = "50%";
        this.deleteBtn.style.padding = "2px 4px";
        this.deleteBtn.style.display = "inline-block";
        this.deleteBtn.style.fontSize = "10px";
        this.deleteBtn.style.border = "1px solid grey";
    }

    public ViewTodoListCompleted(e: any) : any {
        e.target.parentNode.remove();
        setTimeout( () : any => {
            console.log(this.listDelete);
            if (this.listDelete.length > 0 && this.flag === false) {
                this.TitleDelete = document.createElement("h3");
                this.TitleDelete.innerHTML = "Todos complete";
                this.containerListDelete.prepend(this.TitleDelete);
                this.TitleDelete.style.marginTop = "20px";
                this.TitleDelete.style.marginBottom = "0";
                this.flag = true;
            }
        }, 1);

        this.liListDelete = document.createElement("li");
        this.liListDelete.setAttribute("draggable", "true");
        this.todoListDelete.prepend(this.liListDelete);
        this.liListDelete.style.display = "block";
        this.liListDelete.style.marginTop = "5px";

        this.pTodoDelete = document.createElement("span");
        this.pTodoDelete.innerHTML = e.target.nextSibling.innerText;
        this.liListDelete.appendChild(this.pTodoDelete);
        this.pTodoDelete.style.marginLeft = "5px"
        this.pTodoDelete.style.verticalAlign = "middle";

        this.listdeleteBtn = document.createElement("button");
        this.listdeleteBtn.setAttribute("class", 'delete');
        this.listdeleteBtn.innerHTML = "X";
        this.liListDelete.prepend(this.listdeleteBtn);
        this.listdeleteBtn.style.borderRadius = "50%";
        this.listdeleteBtn.style.padding = "2px 4px";
        this.listdeleteBtn.style.display = "inline-block";
        this.listdeleteBtn.style.fontSize = "10px";
        this.listdeleteBtn.style.border = "1px solid grey";
    }

    public dataDeleteTodoListCompleted(e: any) : any {
        this.listDelete.splice(this.listDelete.indexOf(e.target.nextSibling.innerText), 1);            
    }

    public ViewDeleteTodoListeCompleted(e: any) : any {
        e.target.parentNode.remove();
        setTimeout( () : any => {
            if (this.listDelete.length === 0) {
                this.TitleDelete.remove();
                this.flag = false;
            }
        }, 1);
    }

    public ActionInputkeypress () : any {
        this.inputText.addEventListener('keypress', (e: any) : any => {
            if (e.key === 'Enter'){
                console.log(typeof(this.inputText).value);
                this.todo((this.inputText).value);
                this.dataSaveTodoList();
                this.emptyFeildInput();
                this.ViewTodoList();

                this.deleteBtn.onclick = (e2: any) : any => {
                    this.dataDeleteTodoList(e2);
                    this.ViewTodoListCompleted(e2);

                    this.listdeleteBtn.onclick = (e3: any) : any =>{
                        this.dataDeleteTodoListCompleted(e3);
                        this.ViewDeleteTodoListeCompleted(e3);
                    }
                }
            }
        });
    }
}
