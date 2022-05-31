import angular from 'angular';

function greeting() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    transclude: true,
    template: '<h1>Hello, {{name}}</h1> <small ng-transclude></small>'
  }
}

export default angular.module('directives.greeting', [])
  .directive('greeting', greeting)
  .name;