export default class ForecastController {
  constructor(forecastCity) {
    this.forecastCityServ = forecastCity;
    this.cityName = 'new input';
    this.cityName = this.forecastCityServ.city;
    console.log(this.cityName)
  }

}

ForecastController.$inject = ['forecastCity'];
