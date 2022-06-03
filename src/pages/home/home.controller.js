export default class HomeController {
  constructor($log, $scope, $location, forecastCity) {
    this.forecastCityServ = forecastCity;
    this.inputName = 'chennai, Tamilnadu';
    this.inputName = this.forecastCityServ.city;
    $log.log(this.inputName);

    // updating the value of 'sharedName' in the service whenever 'inputName' changes, through watch
    $scope.$watch(() => this.inputName, function (newVal, oldvalue) {
      forecastCity.city = newVal;
    });

    this.onSubmitForecast = function() {
      $location.path('forecast');
    }
  }

  // onSubmitForecast() {
  //   alert('submited!');
  // }

}

HomeController.$inject = ['$log', '$scope', '$location', 'forecastCity'];