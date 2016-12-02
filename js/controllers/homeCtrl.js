angular.module('myApp').controller('homeCtrl',function($scope, myService, ngDialog){
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
      image:'../../IMG/shirts/teepshirt-black-teal.jpg',
      type:'shirts'
    },
    {
      image:'../../IMG/caps/teepers-cap_back_blackred-color-white.jpg',
      type:'caps'
    },
    {
      image:'../../IMG/sweaters/naksweat-black-yellow.jpg',
      type:'sweaters'
    },
    {
      image:'../../IMG/shorts/nakshorts-black-gold.jpg',
      type:'shorts'
    }
    ]

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
