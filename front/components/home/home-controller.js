angular.module('mainApp').controller('homeController', function($scope, $http, $state){

    $scope.tickets = _tickets;
    $scope.cart = _cart;
    $scope.thePark = _thePark;

    function _tickets(){
        $state.go('tickets');
    };

    function _cart(){
        $state.go('cart');
    };

    function _thePark(){
        $state.go('thePark');
    };

});