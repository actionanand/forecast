import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import routing from './app.config';
import home from './pages/home';
import forecast from './pages/forecast';
import navbar from './directives/navbar/navbar.directive';

angular.module('app', [uirouter, ngResource, home, forecast, navbar])
  .config(routing);