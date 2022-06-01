import angular from 'angular';
import uirouter from 'angular-ui-router';

import './forecast.css';

import routing from './forecast.routes';
import ForecastController from './forecast.controller';

export default angular.module('app.forecast', [uirouter])
  .config(routing)
  .controller('ForecastController', ForecastController)
  .name;
