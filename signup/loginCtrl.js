angular.module('myApp').controller('loginCtrl', function($scope,loginService){
  $scope.loginUser = function(user,pw){
    console.log('firing from the loginCtrl');
    loginService.loginUser(user,pw);
  };

})
