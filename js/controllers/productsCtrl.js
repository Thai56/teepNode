angular.module('myApp').controller('productsCtrl', function($scope, myService){
  $scope.messsage = 'this is the products page'

  $scope.getProducts = (function(){
    myService.getProducts().then( (response) => {
      $scope.products = response;
      console.log($scope.products)
    })
  }())


  $scope.getHats = (function() {
    myService.getHats().then( (response) => {
      $scope.hats = response;
      console.log($scope.hats)
    })
  }())

  $scope.getShirts = (function() {
    myService.getShirts().then( (response) => {
      $scope.shirts = response;
      console.log($scope.shirts)
    })
  }())

  $scope.getSweaters = (function() {
    myService.getSweaters().then( (response) => {
      $scope.sweaters = response;
      console.log($scope.sweaters)
    })
  }())
  $scope.getShorts = (function() {
    myService.getShorts().then( (response) => {
      $scope.shorts = response;
      console.log($scope.shorts)
    })
  }())
  $scope.getOnSaleItems = (function() {
    myService.getOnSaleItems().then( (response) => {
      $scope.saleItems = response;
      console.log($scope.saleItems)
    })
  }())
})
