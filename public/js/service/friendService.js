'use strict';

app.service('User', function($http) {

  this.getAll = () => {
    return $http.get('/api/users');
  };

  this.getById = userId => {
    return $http.get(`/api/users/${userId}`)
  };

  this.addFriend = (user1Id, user2Id) => {
    return $http.put(`/api/users/${user1Id}/addFriend/${user2Id}`);
  };

  this.unfriend = (user1Id, user2Id) => {
    return $http.put(`/api/users/${user1Id}/removeFriend/${user2Id}`);
  };

  this.getPotential = userId => {
    return $http.get(`/api/users/${userId}/potential`);
  }
});
