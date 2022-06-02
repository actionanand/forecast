import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import routing from './app.config';
import home from './pages/home';
import forecast from './pages/forecast';
import navbar from './directives/navbar/navbar.directive';
import pagination from './directives/pagination/pagination.directive';

angular.module('app', [uirouter, ngResource, home, forecast, navbar, pagination])
  .config(routing);