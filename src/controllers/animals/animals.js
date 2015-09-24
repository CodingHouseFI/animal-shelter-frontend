'use strict';

angular.module('animalShelter')
.controller('animalIndexCtrl', ['$scope', 'Animal', function($scope, Animal){
  Animal.index()
  .success(res => {
    $scope.animals = res;

  });
}]);
