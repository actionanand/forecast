routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('forecast', {
      url: '/forecast',
      template: require('./forecast.html'),
      controller: 'ForecastController',
      controllerAs: 'forecast'
    });
}
