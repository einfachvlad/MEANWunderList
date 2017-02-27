export default function todosController() {
    this.todosArray = [
        {
            "id": 1,
            "time": "2 hours",
            "date": "2/26/2017",
            "description": "configure backend",
            "status": "todo"
        }, {
            "id": 2,
            "time": "1 hours",
            "date": "2/21/2017",
            "description": "configure frontend",
            "status": "progress"
        }, {
            "id": 3,
            "time": "3 hours",
            "date": "2/22/2017",
            "description": "configure install angular-ui-router",
            "status": "testing"
        }, {
            "id": 4,
            "time": "4 hours",
            "date": "2/23/2017",
            "description": "configure fix bag",
            "status": "todo"
        }, {
            "id": 5,
            "time": "5 hours",
            "date": "2/20/2017",
            "description": "configure configure routing",
            "status": "done"
        }
    ];
    this.todos = [];
    this.progress = [];
    this.testing = [];
    this.done = [];
    sort.call(this, this.array);
}

todosController.prototype.addTask = function() {
    const task = {
        "time": "5 hours",
        "date": "2/20/2017",
        "description": "configure configure routing",
        "status": "todo",
        "id": this.todosArray[this.todosArray.length - 1].id + 1
    }
    this.todosArray.push(task);
    this.todos.push(task);
    console.log(this.todos);
    console.log('added');
}

todosController.prototype.rightMove = function(id) {
    const task = this.todosArray.find((element) => element.id === id);
    switch (task.status) {
        case "todo":
            task.status = "progress";
            break;
        case "progress":
            task.status = "testing";
            break;
        case "testing":
            task.status = "done";
            break;
        case "done":
            break;
    }
    clear.call(this);
    sort.call(this, this.array);
}

todosController.prototype.leftMove = function(id) {
    const task = this.todosArray.find((element) => element.id === id);
    switch (task.status) {
        case "todo":
            break;
        case "progress":
            task.status = "todo";
            break;
        case "testing":
            task.status = "progress";
            break;
        case "done":
            task.status = "testing";
            break;
    }
    clear.call(this);
    sort.call(this, this.array);
}

todosController.prototype.delete = function(id) {
    const task = this.todosArray.find((element) => element.id === id);
    switch (task.status) {
        case "todo":
            this.todos.splice(this.todos.indexOf(task), 1);
            break;
        case "progress":
            this.progress.splice(this.progress.indexOf(task), 1);
            break;
        case "testing":
            this.testing.splice(this.testing.indexOf(task), 1);
            break;
        case "done":
            this.done.splice(this.done.indexOf(task), 1);
            break;
    }
    this.todosArray.splice(this.todosArray.indexOf(task), 1);
}

function clear() {
    this.todos.length = 0;
    this.progress.length = 0;
    this.testing.length = 0;
    this.done.length = 0;
}

function sort(array) {
    this.todosArray.forEach((element) => {
        switch (element.status) {
            case "todo":
                this.todos.push(element);
                break;
            case "progress":
                this.progress.push(element);
                break;
            case "testing":
                this.testing.push(element);
                break;
            case "done":
                this.done.push(element);
                break;
        }
    });
}
