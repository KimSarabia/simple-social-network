'use strict';

var app = angular.module('myApp');

app.controller('friendCtrl', function($scope, $state, User) {


    Auth.getProfile()
        .then(res => {
            $scope.currentUser = res.data;
        })
        .catch(err => {
            $scope.currentUser = null;
        });

    User.getAll()
        .then(res => {
            $scope.users = res.data;
        });


    User.getById($state.params.userId)
        .then(res => {
            $scope.user = res.data;
            return User.getPotential($state.params.userId);
        })
        .then(res => {
            $scope.potential = res.data;
        })

    $scope.removeFriend = friend => {
        User.unfriend($scope.user._id, friend._id)
            .then(res => {

                var index = $scope.user.friends.indexOf(friend);
                $scope.user.friends.splice(index, 1);
                $scope.potential.push(friend);

            });
    };

    $scope.addFriend = () => {
        // console.log('$scope.selectedFriend._id:', typeof $scope.selectedFriend)
        var friend = JSON.parse($scope.selectedFriend)

        User.addFriend($scope.user._id, friend._id)
            .then(res => {
                var index = $scope.potential.indexOf(friend);
                $scope.potential.splice(index, 1);
                $scope.user.friends.push(friend);
            });
    }
});
