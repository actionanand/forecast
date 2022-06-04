export default class HomeController {
  constructor($log, $scope, $location, forecastCityService) {
    this.forecastCityServ = forecastCityService;
    this.inputName = 'chennai, Tamilnadu';
    this.inputName = this.forecastCityServ.city;
    $log.log('Input city from home: ' ,this.inputName);

    // updating the value of 'sharedName' in the service whenever 'inputName' changes, through watch
    $scope.$watch(() => this.inputName, function (newVal, oldvalue) {
      forecastCityService.city = newVal;
    });

    this.onSubmitForecast = function() {
      $location.path('forecast');
    }
  }

  // onSubmitForecast() {
  //   alert('submited!');
  // }

}

HomeController.$inject = ['$log', '$scope', '$location', 'forecastCityService'];