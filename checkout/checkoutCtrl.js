angular.module('myApp').controller('checkoutCtrl',function($scope,$state){
  $scope.message = 'this is the checkout please proceed to enter information'
  $scope.alert = function(name, addrs, country, zip) {
    console.log(country)
    if(!name || !addrs || !country || !zip){
      swal('required firelds incomplete','please fill out the following fields',"warning")
    }
    else {
    // swal('Thank you' + name + 'for your order! Your order will ship to '+ addrs + ' ' + zip,'success')
    swal('success',`Thank you ${name} for your order! Your order will ship to ${addrs} ${zip}`,'success')
      // {
      // title:'you did it!',
      // text:,
      // text:'thank you for your purchas is being process'
      // type:'success'
    // })
    $state.go('payment')
  }
  }
  $scope.processed = function(type,month,year,name,num) {
    if(!type || !name || !num){
      swal('required fields incomplete','please fill out the following fields','warning')
    }
    else {
      swal('success','your payment has been processed!','success')
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
    swal('your product has been added')
  }
})
