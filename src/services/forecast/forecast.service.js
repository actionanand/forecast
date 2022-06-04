import angular from 'angular';

class forecastService {
  constructor($resource, $http) {
    // this.weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this.forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    this.appId = 'a2faa5d1f516e9f9615640d8abd37bef';
    this.units = 'metric'

    this.getForecast = function(cityName, timeSlot) {
      return $resource(this.forecastUrl)
        .get({q: cityName, cnt: timeSlot, units: this.units, APPID: this.appId})
        .$promise.then((resp) => {
        console.log(resp);
        return resp;
      }, (err) => {
        console.log(err);
        return err.data;
      });
    };

    // using $http 
    // this.getForecast = function(cityName, timeSlot) {
    //   return $http({
    //     method: 'GET',
    //     url: this.forecastUrl,
    //     params: {q: cityName, cnt: timeSlot, units: this.units, APPID: this.appId}
    //   }).then((resp) => {
    //     console.log(resp.data);
    //     return resp.data;
    //   }, (err) => {
    //     console.log(err);
    //     return err.data;
    //   });
    // };

  }

}

forecastService.$inject = ['$resource', '$http'];

export default angular.module('services.forecastService', [])
  .service('forecastService', forecastService)
  .name;