angular.module('mainApp').config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider.state('home', {
        url:'/home',
        templateUrl: 'components/home/home-view.html',
        controller: 'homeController'
      });


      $urlRouterProvider.otherwise('/home');

});