angular.module('myApp').controller('productsCtrl', function($scope, ngDialog, myService){
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
// ====================================================================================================================
  // DIALOG BOX
  // ====================================================================================================================
  $scope.clickToOpen = function (image,id,desc,price) {
    var newScope = $scope.$new();
    newScope.image = image;
    newScope.id = id;
    newScope.desc = desc;
    newScope.price = price;
        ngDialog.open({ template: './views/popupTmpl.html', className: 'ngdialog-theme-default', controller:'homeCtrl', scope: newScope });
    };
})
