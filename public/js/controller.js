'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, Auth) {
  Auth.getProfile()
  .then(res => {
    $scope.currentUser = res.data;
  })
  .catch(err =>  {
    $scope.currentUser = null;
  });
})
