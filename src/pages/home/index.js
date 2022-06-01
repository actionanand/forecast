import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import './home.css';

import routing from './home.routes';
import HomeController from './home.controller';
import forecastCity from '../../services/forecast-city.service';

export default angular.module('app.home', [uirouter, ngResource, forecastCity])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;