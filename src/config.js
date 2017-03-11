import todosController from './todos/todosController.js';
export default function($stateProvider, $urlRouterProvider, $locationProvider) {
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
};
