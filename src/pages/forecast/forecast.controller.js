export default class ForecastController {
  constructor(randomNames, $log, $scope) {
    this.randomNameServ = randomNames;
    this.inputName = 'new input';
    this.inputName = this.randomNameServ.sharedName;

    // updating the value of 'sharedName' in the service whenever 'inputName' changes, through watch
    $scope.$watch(() => this.inputName, function (newVal, oldvalue) {
      randomNames.sharedName = newVal;
      $log.warn('Old value: ', oldvalue);
      console.info('Input name changed to : ' + newVal);
    });

  }

}

ForecastController.$inject = ['randomNames', '$log', '$scope'];
