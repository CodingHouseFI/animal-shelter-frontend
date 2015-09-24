'use strict';

angular.module('animalShelter', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', { url: '/', templateUrl: 'src/views/general/home.html', controller: 'homeCtrl' })
  
  .state('animals', { url: '/animals', abstract: true, templateUrl: 'src/views/animals/animals.html' })
  .state('animals.index', { url: '/', templateUrl: 'src/views/animals/index.html', controller: 'animalIndexCtrl' })

  .state('clients', { url: '/clients', abstract: true, templateUrl: 'src/views/clients/clients.html'})
  .state('clients.index', { url: '/', templateUrl: 'src/views/clients/index.html', controller: 'clientIndexCtrl' })
  .state('clients.show', { url: '/:clientId', templateUrl: 'src/views/clients/show.html', controller: 'clientShowCtrl' })
})
.constant('constants', {
  apiUrl: 'http://localhost:3000'
});