import angular from 'angular';
import uirouter from 'angular-ui-router';

import './betaTesting.css';

import routing from './betaTesting.routes';
import BetaTestingController from './betaTesting.controller';

export default angular.module('app.betaTesting', [uirouter])
  .config(routing)
  .controller('BetaTestingController', BetaTestingController)
  .name;
