import angular from 'angular';

const todoFactory = angular.module('app.todoFactory', []).factory('todoFactory', [
    '$http',
    function($http) {
        function sort() {
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
        function createTask(task) {
            task.isEditable = false;
            task.isCreated = true;
            $http.post('/todos', task).then(response => {
                this.getTasks();
            });
        };
        function saveTask(task) {
            task.isEditable = false;
            $http.put(`/todos/${task._id}`, task);
        };
        function getTasks() {
            $http.get('/todos').then(response => {
                this.todosArray = response.data.todos;
                this.clear.call(this);
                this.sort.call(this);
            });
        };

        function clear() {
            this.todos.length = 0;
            this.progress.length = 0;
            this.testing.length = 0;
            this.done.length = 0;
        };

        function deleteTask(task) {
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
            $http.delete(`/todos/${task._id}`);
        };

        return {
            createTask,
            saveTask,
            deleteTask,
            getTasks,
            sort,
            clear
        }
    }
]);

export default todoFactory;
