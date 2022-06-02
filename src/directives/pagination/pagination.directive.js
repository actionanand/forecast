import angular from 'angular';

import './pagination.css';

function pagination() {
  return {
    restrict: 'AE',
    scope: {
      pageObj: '='
    },
    template: require('./pagination.html'),
    controller: (['$scope', '$location', function($scope, $location) {
      $scope.nextPage = () => {
        $scope.currentInd = $scope.pageObj.pageArray.indexOf(+$scope.pageObj.day); 
        if($scope.currentInd + 1 < $scope.pageObj.pageArray.length) {
          $scope.nextValue = $scope.pageObj.pageArray[$scope.currentInd + 1];
          $scope.newUrl = 'forecast/' + $scope.nextValue;
          $location.path($scope.newUrl);
        }
      },

      $scope.prevPage = () => {
        $scope.currentInd = $scope.pageObj.pageArray.indexOf(+$scope.pageObj.day); 
        if($scope.currentInd - 1 >= 0) {
          $scope.nextValue = $scope.pageObj.pageArray[$scope.currentInd - 1];
          $scope.newUrl = 'forecast/' + $scope.nextValue;
          $location.path($scope.newUrl);
        }
      }
    }])
  }
}

export default angular.module('directives.pagination', [])
  .directive('pagination', pagination)
  .name;