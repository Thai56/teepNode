angular.module('myApp',['ui.router','ui.bootstrap','ngAnimate']).config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state('home', {
    url:'/',
    templateUrl:'./views/home.html',
    controller:'homeCtrl'
  })
  .state('shirts', {
    url:'/products/shirts',
    templateUrl:'./views/shirtsTmpl.html',
    controller:'productsCtrl'
  })


  $urlRouterProvider
  .otherwise('/')

})
