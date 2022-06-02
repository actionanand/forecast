export default class HomeController {
  constructor($log, $scope, forecastCity) {
    this.forecastCityServ = forecastCity;
    this.inputName = 'chennai, Tamilnadu';
    this.inputName = this.forecastCityServ.city;
    $log.log(this.inputName);

    // updating the value of 'sharedName' in the service whenever 'inputName' changes, through watch
    $scope.$watch(() => this.inputName, function (newVal, oldvalue) {
      forecastCity.city = newVal;
    });
  }

}

HomeController.$inject = ['$log', '$scope', 'forecastCity'];