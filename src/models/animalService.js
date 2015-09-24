'use strict';

angular.module('animalShelter')
.service('Animal', ['$http', 'constants', function($http, constants){
  let api = constants.apiUrl;
  this.index = () => $http.get(`${api}/animals`);
  this.show = (animal) => $http.get(`${api}/animals/${animal._id}`);
  this.create = (animal) => $http.post(`${api}/animals`, animal);
  this.update = (animal) => $http.put(`${api}/animals/${animal._id}`, animal);
  this.delete = (animal) => $http.delete(`${api}/animals/${animal._id}`);
}]);
