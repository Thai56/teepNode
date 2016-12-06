angular.module('myApp').controller('checkoutCtrl',function($scope,$state){
  $scope.message = 'this is the checkout please proceed to enter information'
  $scope.alert = function(name, addrs, country, zip) {
    console.log(country)
    if(!name || !addrs || !country || !zip){
      alert('please fill out the following fields')
    }
    else {
    alert(`Thank you ${name} for your order! Your order will ship to ${addrs} ${zip}`)
    $state.go('payment')
  }
  }
  $scope.processed = function(type,month,year,name,num) {
    if(!type || !name || !num){
      alert('please fill out the following fields')
    }
    else {
      alert('thank you. your payment has been processed!')
      $state.go('home')
    }
  }

  $scope.add = function(id,type,price,size) {
    $scope.productArr = [];
    $scope.productArr.push({
      id:id,
      type:type,
      price:price,
      size:size
    })
    console.log($scope.productArr)
    alert('your product has been added')
  }
})
