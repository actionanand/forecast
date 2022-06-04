export default class ForecastController {
  constructor($q, $stateParams, forecastCityService, forecastService) {
    
    this.forecastCityServ = forecastCityService;
    this.forecastServ = forecastService;

    this.cityName = 'bangalore, In';
    this.cityName = this.forecastCityServ.city;

    console.log('Typed city is ',this.cityName)

    this.day = $stateParams.day || 3;

    this.paginationObj = {
      pageArray: [1, 5, 7, 13, 20, 27, 35, 40],
      url: 'forecast',
      day: this.day,
      firstP: 1,
      lastP: 40
    }; 

    this.weatherResult = this.forecastServ.getForecast(this.cityName, this.day);

    $q.when(this.weatherResult).then((resp) => {
      this.weatherResult = resp;
    });

    // $resource(this.forecastUrl).get({q: this.cityName, cnt: this.day, units: this.units, APPID: this.appId})
    //   .$promise.then((resp) => {
    //     console.log(resp);
    //     this.weatherResult = resp;
    // }, (err) => {
    //   console.log(err);
    //   this.weatherResult = err.data;
    // });

    this.convertToDate = function(dt) { 
      return new Date(dt * 1000);
    };

  }
  
}

ForecastController.$inject = ['$q', '$stateParams', 'forecastCityService', 'forecastService'];
