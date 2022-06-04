import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import './forecast.css';

import routing from './forecast.routes';
import ForecastController from './forecast.controller';
import forecastService from '../../services/forecast/forecast.service';

export default angular.module('app.forecast', [uirouter, ngResource, forecastService])
  .config(routing)
  .controller('ForecastController', ForecastController)
  .name;
