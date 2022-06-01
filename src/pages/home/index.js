import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import './home.css';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';
import greeting    from '../../directives/greeting/greeting.directive';

export default angular.module('app.home', [uirouter, ngResource, randomNames, greeting])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;