angular.module('myApp',['ui.router','ui.bootstrap','ngAnimate','ngDialog','ngCart']).config(function($stateProvider,$urlRouterProvider){
// =================================================================================================================================
// Products
// =================================================================================================================================
  $stateProvider
  .state('home', {
    url:'/products',
    templateUrl:'./views/home.html',
    controller:'homeCtrl'
  })
  .state('shirts', {
    url:'/products/shirts',
    templateUrl:'./views/shirts/shirtsTmpl.html',
    controller:'productsCtrl'
  })
  .state('shorts', {
    url:'/products/shorts',
    templateUrl:'./views/shorts/shortsTmpl.html',
    controller:'productsCtrl'
  })
  .state('sweaters', {
    url:'/products/sweaters',
    templateUrl:'./views/sweaters/sweatersTmpl.html',
    controller:'productsCtrl'
  })
  .state('caps', {
    url:'/products/caps',
    templateUrl:'./views/caps/capsTmpl.html',
    controller:'productsCtrl'
  })
// =================================================================================================================================
// On Sale
//=================================================================================================================================
.state('onSale', {
  url:'/products/onSale',
  templateUrl:'./views/onSale/onSaleTmpl.html',
  controller:'productsCtrl'
})
// =================================================================================================================================
// Shopping Cart
//=================================================================================================================================
.state('cart', {
  url:'/products/cart',
  templateUrl:'./views/cart/cartTmpl.html',
  controller:'productsCtrl'
})

  $urlRouterProvider
  .otherwise('/products')

})
// png file convert to anything thats white to transparent tool online to help
