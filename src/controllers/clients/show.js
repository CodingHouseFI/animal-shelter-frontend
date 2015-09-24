'use strict';

angular.module('animalShelter')
.controller('clientShowCtrl', ['$scope', '$stateParams', 'Client', function($scope, $stateParams, Client){

  Client.show($stateParams.clientId)
  .then(res => {
    $scope.client = res.data;
  })
  .catch(err => {
    console.log(err);
  });

}]);
