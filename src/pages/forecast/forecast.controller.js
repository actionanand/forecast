export default class ForecastController {
  constructor($resource, $http, forecastCity) {
    
    this.forecastCityServ = forecastCity;
    this.cityName = 'new input';
    this.cityName = this.forecastCityServ.city;
    console.log(this.cityName)

    // this.weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
    // this.sapleGithubUrl = 'https://api.github.com/users/fikkatra';
    this.forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    this.appId = 'a2faa5d1f516e9f9615640d8abd37bef';
    this.units = 'metric'

    this.weatherResult = '';


    // $http({
    //   method: 'GET',
    //   url: this.forecastUrl,
    //   params: {q: this.cityName, cnt: 2, APPID: this.appId}
    // }).then(function(resp) {
    //   console.log(resp.data);
    // }, function(err) {
    //   console.log(err);
    // })


    $resource(this.forecastUrl).get({q: this.cityName, cnt: 10, units: this.units, APPID: this.appId}).$promise.then((resp) => {
      console.log(resp);
      this.weatherResult = resp;
      // console.log(new Date(this.weatherResult.dt * 1000));
    }, (err) => {
      console.log(err);
    });

    this.convertToDate = function(dt) { 
      return new Date(dt * 1000);
    };

  }
  
}

ForecastController.$inject = ['$resource', '$http', 'forecastCity'];
