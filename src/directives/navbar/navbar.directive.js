import angular from 'angular';

import logo from '../../public/img/logo.png';

import './navbar.css';

function navbar() {
  return {
    restrict: 'AE',
    scope: {
      myLinks: '='
    },
    template: require('./navbar.html'),
    controller: (['$scope', function($scope) {
      $scope.logoName = 'Brand';
      $scope.logoImg = logo;
    }])
  }
}

export default angular.module('directives.navbar', [])
  .directive('navbar', navbar)
  .name;