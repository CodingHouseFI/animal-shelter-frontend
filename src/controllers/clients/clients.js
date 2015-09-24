'use strict';

angular.module('animalShelter')
.controller('clientIndexCtrl', ['$scope', 'Client', function($scope, Client){
  Client.index()
  .success(res => {
    $scope.clients = res;
  });

}]);
