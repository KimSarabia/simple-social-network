'use strict';

app.service('Auth', function($http){
  this.getProfile = () => {
    return $http.get('/api/users/profile');
  }
})
