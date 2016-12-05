angular.module('myApp').controller('checkoutCtrl',function($scope){
  $scope.message = 'this is the checkout please proceed to enter information'
  $scope.alert = function(name, addrs, country, zip) {
    console.log(country)
    if(!name || !addrs || !country || !zip){
      alert('please fill out the following fields')
    }
    else {
    alert(`Thank you ${name} for your order! Your order will ship to ${addrs} ${zip}`)
  }
  }
})
