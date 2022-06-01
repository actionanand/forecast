export default class HomeController {
  constructor(forecastCity, $log, $scope, $resource) {
    this.forecastCityServ = forecastCity;
    this.inputName = 'chennai, Tamilnadu';
    this.inputName = this.forecastCityServ.city;
    $log.log($resource);

    // updating the value of 'sharedName' in the service whenever 'inputName' changes, through watch
    $scope.$watch(() => this.inputName, function (newVal, oldvalue) {
      forecastCity.city = newVal;
    });
  }

}

HomeController.$inject = ['forecastCity', '$log', '$scope', '$resource'];