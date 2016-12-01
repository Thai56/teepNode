angular.module('myApp').controller('homeCtrl',function($scope, myService){
  $scope.message='working from homeCtrl';
  $scope.getProducts = (function(){
    myService.getProducts().then( (response) => {
      $scope.products = response;
      console.log($scope.products)
    })
  }())
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image:'../../IMG/shirts/teepshirt-black-teal.jpg'
    },
    {
      image:'../../IMG/caps/teepers-cap_back_blackred-color-white.jpg'
    },
    {
      image:'../../IMG/sweaters/naksweat-black-yellow.jpg'
    },
    {
      image:'../../IMG/shorts/nakshorts-black-gold.jpg'
    }
    ]
})
