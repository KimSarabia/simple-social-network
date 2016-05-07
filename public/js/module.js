'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: '/html/login.html',
      controller: 'loginCtrl'
    })
    .state('profile', {
      url: '/detail/:userId',
      templateUrl: '/html/profile.html',
      controller: 'profileCtrl'
    })
    .state('friends', {
      url: '/detail/:userId',
      templateUrl: '/html/friends.html',
      controller: 'friendsCtrl'
    })

  $urlRouterProvider.otherwise('/list');
});
