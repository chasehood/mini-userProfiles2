angular.module('userProfiles').service('mainService', function($http) {
    this.gesture = function() {
        Return $http.get('https://reqres.in/api/users?page=1')
    }