'use strict';

angular.module('animalShelter')
.service('Client', ['$http', 'constants', function($http, constants){
  let api = constants.apiUrl;
  this.index = () => $http.get(`${api}/clients`);


  // this.show = clientId => $http.get(`${api}/clients/${clientId}`);

  this.show = function(clientId) {
    return $http.get(api + '/clients/' + clientId);
  };


  this.create = client => $http.post(`${api}/clients`, client);
  // this.update = client => $http.put(`${api}/clients/${client._id}`, client);
  this.update = client => $http.put(api + '/clients/' + client._id, client);
  this.delete = client => $http.delete(`${api}/clients/${client._id}`);
}]);
