export default function todosController(todoFactory) {
this.filterTodos="All Tasks"
    this.todosArray = [];
    this.todos = [];
    this.progress = [];
    this.testing = [];
    this.done = [];
    this.getTasks = todoFactory.getTasks;
    this.getTasks();
    this.createTask = todoFactory.createTask;
    this.saveTask = todoFactory.saveTask;
    this.deleteTask = todoFactory.deleteTask;
    this.sort = todoFactory.sort;
    this.clear = todoFactory.clear;

}

todosController.prototype.addTask = function() {
    const task = {
        "time": "",
        "date": "",
        "description": "",
        "status": "todo",
        "isEditable": true,
        "isCreated": false
    }
    this.todosArray.push(task);
    this.todos.push(task);
}

todosController.prototype.editTask = function(task) {
    task.isEditable = true;
}

todosController.prototype.rightMove = function(task) {
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
    this.saveTask(task);
    this.clear.call(this);
    this.sort.call(this, this.array);
}

todosController.prototype.leftMove = function(task) {
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
    this.saveTask(task);
    this.clear.call(this);
    this.sort.call(this, this.array);
}
