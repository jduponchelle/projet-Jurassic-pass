angular.module('mainApp').controller('appController', function($scope, $http, $state){

    let token = sessionStorage.getItem('token');
    console.log(token);

});