export class Todo {
    protected list: Array<string> = new Array();
    protected listDelete: Array<string> = new Array();
    protected TitleDelete: HTMLElement ;
    protected flag: boolean= false;
    protected containerApp: HTMLElement;
    protected contentInputText: HTMLElement;
    protected inputText: HTMLInputElement;
    protected containerList: HTMLElement;
    protected todoList: HTMLElement;
    protected containerListDelete: HTMLElement;
    protected todoListDelete: HTMLElement;

    constructor() {
        this.ViewApp();
    }

    public ViewApp(): void {
        this.containerApp = document.createElement("div");
        this.containerApp.setAttribute("id", "appToDoList");
        document.body.appendChild(this.containerApp);

        this.contentInputText = document.createElement("div");
        this.contentInputText.setAttribute("id", "contentInputText");
        this.containerApp.appendChild(this.contentInputText);

        this.inputText = document.createElement("input");
        this.inputText.setAttribute("placeholder", "todo...");
        this.inputText.setAttribute("id", "inputTodo");
        this.contentInputText.appendChild(this.inputText);
        this.inputText.style.border = "0px";
        this.inputText.style.borderBottom = "1px solid #747474";
        this.inputText.style.fontSize = "16px";
        this.inputText.style.outline = "0px solid white";

        this.containerList = document.createElement("div");
        this.containerList.setAttribute("id", "contentList");
        this.contentInputText.parentNode.insertBefore(this.containerList, this.contentInputText.nextSibling);

        this.todoList = document.createElement("ul");
        this.todoList.setAttribute("id", "todoList");
        this.containerList.appendChild(this.todoList);
        this.todoList.style.margin = "0";
        this.todoList.style.marginTop = "10px";
        this.todoList.style.padding = "0";
        this.todoList.style.listStyle = "none";

        this.containerListDelete = document.createElement("div");
        this.containerListDelete.setAttribute("id", "contentListDelete");
        this.containerList.parentNode.insertBefore(this.containerListDelete, this.containerList.nextSibling);

        this.todoListDelete = document.createElement("ul");
        this.todoListDelete.setAttribute("id", "todoListDelete");
        this.containerListDelete.appendChild(this.todoListDelete);
        this.todoListDelete.style.margin = "0";
        this.todoListDelete.style.marginTop = "10px";
        this.todoListDelete.style.padding = "0";
        this.todoListDelete.style.listStyle = "none";
    }
};
