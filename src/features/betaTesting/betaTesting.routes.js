routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('betaTesting', {
      url: '/beta-testing',
      template: require('./betaTesting.html'),
      controller: 'BetaTestingController',
      controllerAs: 'betaTesting'
    });
}
