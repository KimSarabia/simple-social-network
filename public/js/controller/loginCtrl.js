'use strict';

var app = angular.module('myApp');

app.controller('loginCtrl', function($scope, Auth) {
  Auth.getProfile()
  .then(res => {
    $scope.currentUser = res.data;
  })
  .catch(err =>  {
    $scope.currentUser = null;
  });
})
