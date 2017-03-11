import angular from 'angular';
import ngResource from 'angular-resource';

const todoFactory = angular.module('app.todoFactory', [ngResource]).factory('todoFactory', [
    '$resource',
    function($resource) {
        const Todos = $resource('/todos');
        const Todo = $resource('/todos/:id',null, {
            'update': {
                method: 'PUT'
            }
        });
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
            const that = this;
            task.isEditable = false;
            task.isCreated = true;
            Todos.save(task, function() {
                that.getTasks();
            });
        };
        function saveTask(task) {
            task.isEditable = false;
            Todo.update({id: task._id}, task);
        };
        function getTasks() {
            const that = this;
            this.todosArray = Todos.query(function() {
                that.clear.call(that);
                that.sort.call(that);
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
            Todo.delete({id: task._id});
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
