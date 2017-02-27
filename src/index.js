import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'sass/master.scss';
import todosController from './todos/todosController.js'

const app = angular.module('app', [uiRouter]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider,$injector) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
            .state('todos', {
                url: '/',
                template:require('todos/todos.html'),
                controller: todosController,
                controllerAs: 'todosCtrl'
            })
            .state('about', {
                url: '/about',
                template:require('about/about.html')
            });
//console.log($injector.has('todoCardDirective'));
    //$locationProvider.html5Mode(true);
});

app.directive('todoCard', function() {
    return {
        restrict: 'E',
        template: require('todo/todo.template.html')
    };
});

export default app;
