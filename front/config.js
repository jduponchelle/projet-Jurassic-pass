angular.module('mainApp').config(function($stateProvider, $urlRouterProvider){
    
  
    $stateProvider.state('home', {
        url:'/home',
        templateUrl: 'components/home/home-view.html',
        controller: 'homeController'
      });

      $stateProvider.state('tickets', {
        url:'/tickets',
        templateUrl: 'components/tickets/tickets-view.html',
        controller: 'ticketsController'
      });

      $stateProvider.state('thePark', {
        url:'/thePark',
        templateUrl: 'components/thePark/thePark-view.html',
        controller: 'theParkController'
      });

      $stateProvider.state('cart', {
        url:'/cart',
        templateUrl: 'components/cart/cart-view.html',
        controller: 'cartController'
      });

      $stateProvider.state('login', {
        url:'/login',
        templateUrl: 'components/login/login-view.html',
        controller: 'loginController'
      });

      $stateProvider.state('register', {
        url:'/register',
        templateUrl: 'components/register/register-view.html',
        controller: 'registerController'
      });



      $urlRouterProvider.otherwise('/home');

});