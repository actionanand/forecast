import angular from 'angular';

class forecastCityService {
  constructor() {
    this.city = 'Chennai,In';
  }

}

export default angular.module('services.forecast-city', [])
  .service('forecastCityService', forecastCityService)
  .name;