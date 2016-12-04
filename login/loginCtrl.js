angular.module('myApp').controller('loginCtrl', function($scope,loginService,$stateParams,$state){
const checkOut = 'checkout'
  $scope.loginUser = function(user,pw){
    console.log('firing from the loginCtrl');
    $scope.response =loginService.loginUser(user,pw);
    console.log('this is response ', $scope.response);
    if($scope.response){
      $state.go('checkout')
    }
  };

  $scope.registerUser = function(user,pw){
  loginService.registerUser(user,pw,pwCheck)
  }

})
