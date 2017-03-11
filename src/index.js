//import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'sass/master.scss';
import todoFactory from './factories/todo-factory';
import config from './config';

const app = angular.module('app', [uiRouter, todoFactory.name,'ngDragDrop']);
app.config(config);

app.directive('todoCard', function() {
    return {
        restrict: 'E',
        replace:true,
        template: require('todo/todo.template.html')};
});
app.filter('bookmarkFilter', function() {
    return function(todosArray,bookmarkedCh) {
        if (bookmarkedCh) {
            return todosArray.filter(item => item.isBookmarked);
        }
        return todosArray;
    };
});
app.directive('datepicker', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
                    dateFormat:'dd/mm/yy',
                    onSelect:function (date) {
                        scope.$apply(function () {
                            ngModelCtrl.$setViewValue(date);
                        });
                    }
                });
            });
        }
    }
});
export default app;
