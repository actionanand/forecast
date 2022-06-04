import angular from 'angular';
import uirouter from 'angular-ui-router';

import './home.css';

import routing from './home.routes';
import HomeController from './home.controller';
import forecastCityService from '../../services/forecast-city/forecast-city.service';

export default angular.module('app.home', [uirouter, forecastCityService])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;