import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import './forecast.css';

import routing from './forecast.routes';
import ForecastController from './forecast.controller';

export default angular.module('app.forecast', [uirouter, ngResource])
  .config(routing)
  .controller('ForecastController', ForecastController)
  .name;
