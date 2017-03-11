export default function todosController(todoFactory) {
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
    this.ToDoCh = true;
    this.ProgressCh = true;
    this.TestingCh = true;
    this.DoneCh = true;
    // this.todosCategories = {
    //     "To Do": this.todos,
    //     "In Progress": this.progress,
    //     "To Testing": this.testing,
    //     "Done": this.done
    // };
}
todosController.prototype.bookmarkToggle = function(task) {
    task.isBookmarked = !task.isBookmarked;
    this.saveTask(task);
};
todosController.prototype.addTask = function() {
    const task = {
        "time": "",
        "date": convertedtDate(),
        "description": "",
        "status": "todo",
        "isEditable": true,
        "isCreated": false,
        "isBookmarked": false
    }
    console.log(task);
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

todosController.prototype.onDropComplete = function(event, ui, taskArray,columnTitle) {
    switch (columnTitle) {
        case "todo":
            taskArray[taskArray.length - 1].status = "todo"
            break;
        case "progress":
            taskArray[taskArray.length - 1].status = "progress";
            break;
        case "testing":
            taskArray[taskArray.length - 1].status = "testing";
            break;
        case "done":
            taskArray[taskArray.length - 1].status = "done";
            break;
    }
console.log(taskArray[taskArray.length - 1]);
    this.saveTask(taskArray[taskArray.length - 1]);
}

function convertedtDate() {
    const date = new Date();
    function convert(datePart) {
        return (datePart < 10)
            ? '0' + datePart
            : datePart;
    }
    return [
        convert(date.getDate()),
        convert(date.getMonth() + 1),
        date.getFullYear()
    ].join('/');
}
