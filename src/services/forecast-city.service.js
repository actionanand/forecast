import angular from 'angular';

class forecastCity {
  constructor() {
    this.city = 'London,uk';
  }

  // getName() {
  //   const totalNames = this.names.length;
  //   const rand = Math.floor(Math.random() * totalNames);
  //   return this.names[rand];
  // }
}

export default angular.module('services.forecast-city', [])
  .service('forecastCity', forecastCity)
  .name;