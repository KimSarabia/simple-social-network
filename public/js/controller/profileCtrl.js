'use strict';

var app = angular.module('myApp');

app.controller('profileCtrl', function($scope, Auth) {
  Auth.getProfile()
  .then(res => {
    $scope.currentUser = res.data;
  })
  .catch(err =>  {
    $scope.currentUser = null;
  });
})
