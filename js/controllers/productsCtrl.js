angular.module('myApp').controller('productsCtrl', function($scope, myService){
  $scope.messsage = 'this is the products page'

  $scope.getProducts = (function(){
    myService.getProducts().then( (response) => {
      $scope.products = response;
      console.log($scope.products)
    })
  }())


  $scope.getCaps = (function() {
    myService.getHats().then( (response) => {
      $scope.hats = response;
      console.log($scope.hats)
    })
  }())
})
