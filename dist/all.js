angular.module('myApp',['ui.router','ui.bootstrap','ngAnimate','ngDialog','ngCart','angularModalService']).config(function($stateProvider,$urlRouterProvider){
// =================================================================================================================================
// Products
// =================================================================================================================================
  $stateProvider
  .state('home', {
    url:'/products',
    templateUrl:'./views/home.html',
    controller:'homeCtrl'
  })
  .state('shirts', {
    url:'/products/shirts',
    templateUrl:'./views/shirts/shirtsTmpl.html',
    controller:'productsCtrl'
  })
  .state('shorts', {
    url:'/products/shorts',
    templateUrl:'./views/shorts/shortsTmpl.html',
    controller:'productsCtrl'
  })
  .state('sweaters', {
    url:'/products/sweaters',
    templateUrl:'./views/sweaters/sweatersTmpl.html',
    controller:'productsCtrl'
  })
  .state('caps', {
    url:'/products/caps',
    templateUrl:'./views/caps/capsTmpl.html',
    controller:'productsCtrl'
  })
// =================================================================================================================================
// On Sale
//=================================================================================================================================
.state('onSale', {
  url:'/products/onSale',
  templateUrl:'./views/onSale/onSaleTmpl.html',
  controller:'productsCtrl'
})
// =================================================================================================================================
// Shopping Cart
//=================================================================================================================================
.state('cart', {
  url:'/products/cart',
  templateUrl:'./views/cart/cartTmpl.html',
  controller:'productsCtrl'
})
// =================================================================================================================================
// login
//=================================================================================================================================
.state('login', {
  url:'/login',
  templateUrl:'./login/loginTmpl.html',
  controller:'loginCtrl'
})
// =================================================================================================================================
// Register
//=================================================================================================================================
.state('register', {
  url:'/login/register',
  templateUrl:'./login/registerTmpl.html',
  controller:'loginCtrl'
})
// =================================================================================================================================
// checkout
//=================================================================================================================================
.state('checkout', {
  url:'/checkout',
  templateUrl:'./checkout/checkoutTmpl.html',
  controller:'checkoutCtrl'
})
.state('payment', {
  url:'/checkout/payment',
  templateUrl:'./checkout/paymentTmpl.html',
  controller:'checkoutCtrl'
})

  $urlRouterProvider
  .otherwise('/products')

})
// png file convert to anything thats white to transparent tool online to help

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
      type:'shirts',
      text:'Tees'
    },
    {
      image:'../../IMG/caps/teepers-cap_back_blackred-color-white.jpg',
      type:'caps',
      text:'Caps'
    },
    {
      image:'../../IMG/sweaters/naksweat-black-yellow.jpg',
      type:'sweaters',
      text:'Hoodies'
    },
    {
      image:'../../IMG/shorts/nakshorts-black-gold.jpg',
      type:'shorts',
      text:'Thai Shorts'
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
        // ====================================================================================================================
          // options
          // ====================================================================================================================
        $scope.options = [{
        Label:'size',
        notAnOption:true
        },
        {
        Label:'small',
        Value:'product.size[0]'
        },
        {
        Label:'medium',
        Value:'product.size[1]'
        },
        {
        Label:'large',
        Value:'product.size[2]'
        }
      ];



})

angular.module('myApp').controller('mainCtrl', function($scope, myService){
  $scope.message ='working'
})

angular.module('myApp').controller('productsCtrl', function($scope, ngDialog, myService,loginService,$state){
  $scope.messsage = 'this is the products page'

  $scope.getProducts = (function(){
    myService.getProducts().then( (response) => {
      $scope.products = response;
      // console.log($scope.products)
    })
  }())


  $scope.getHats = (function() {
    myService.getHats().then( (response) => {
      $scope.hats = response;
      // console.log($scope.hats)
    })
  }())

  $scope.getShirts = (function() {
    myService.getShirts().then( (response) => {
      $scope.shirts = response;
      // console.log($scope.shirts)
    })
  }())

  $scope.getSweaters = (function() {
    myService.getSweaters().then( (response) => {
      $scope.sweaters = response;
      // console.log($scope.sweaters)
    })
  }())
  $scope.getShorts = (function() {
    myService.getShorts().then( (response) => {
      $scope.shorts = response;
      // console.log($scope.shorts)
    })
  }())
  $scope.getOnSaleItems = (function() {
    myService.getOnSaleItems().then( (response) => {
      $scope.saleItems = response;
      // console.log($scope.saleItems)
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

    // ====================================================================================================================
      // options
      // ====================================================================================================================
    $scope.options = [{
    Label:'size',
    notAnOption:true
    },
    {
    Label:'small',
    Value:'product.size[0]'
    },
    {
    Label:'medium',
    Value:'product.size[1]'
    },
    {
    Label:'large',
    Value:'product.size[2]'
    }
  ];

  $scope.signInFirst = function(){
    $scope.signedIn = loginService.checkOutAccess();
    if(!$scope.signedIn ){
      $state.go('login')
      // console.log('if statement', $scope.signedIn);
    }
    else if($scope.signedIn ){
      $state.go('checkout')
      // console.log('else if statement', $scope.signedIn);
    }

  }

  $scope.isUserSignedIn = function(){
    $scope.loggedIn = loginService.isUserSignedIn();
    // console.log('this is loggedIn', $scope.loggedIn)
  }
  $scope.isUserSignedIn();
})

angular.module('myApp').directive('headerDirective', function() {
  return {
    restrict:'E',
    templateUrl:'./views/headerTmpl.html'
  }
})

angular.module('myApp').directive('navDir', function(){

  return {
        restrict:'E',
    templateUrl:'./views/navTmpl.html'
  }
})

angular.module('myApp').service('myService', function($http,$q){
  // ========================================================================================================
  // VARIABLES
  // ========================================================================================================
  const productsPath = '../../products/products.json'
  const cap = 'cap';
  const shirt = 'shirt'
  const sweater = 'sweater'
  const shorts = 'shorts'
  const sale = 'on_sale'
  // ========================================================================================================
// PRODUCTs
// ========================================================================================================
  this.getProducts = () => {
    var defer = $q.defer();
    $http({
      method:'GET',
      url:'../../products/products.json'
    }).then(response => defer.resolve(response.data))
    return defer.promise;
  }
  // ============================================================================================================
  // HATS
  // ========================================================================================================
  this.getHats = () => {
    var defer = $q.defer();
    $http.get(productsPath).then(response=> {
      var productsArr = response.data;
      var hatArr = [];
      productsArr.forEach(product => {
        if(product.type === cap){
          hatArr.push(product)
          // console.log('this is har array',hatArr)
          defer.resolve(hatArr)
        }
      })
// console.log (productsArr)

    })
    return defer.promise;
  }
  // ============================================================================================================
  // shirts
  // ========================================================================================================
  this.getShirts = () => {
    let defer = $q.defer();
    $http.get(productsPath).then(response=> {
      let productsArr = response.data;
      let shirtArr = [];
      productsArr.forEach(product => {
        if(product.type === shirt){
          shirtArr.push(product)
          // console.log('this is the shirt array',shirtArr)
          defer.resolve(shirtArr)
        }
      })
// console.log (shirtArr)

    })
    return defer.promise;
  }
  // ============================================================================================================
  // sweaters
  // ========================================================================================================
  this.getSweaters = () => {
    let defer = $q.defer();
    $http.get(productsPath).then(response=> {
      let productsArr = response.data;
      let sweaterArr = [];
      productsArr.forEach(product => {
        if(product.type === sweater){
          sweaterArr.push(product)
          // console.log('this is the sweater array',sweaterArr)
          defer.resolve(sweaterArr)
        }
      })
// console.log (sweaterArr)

    })
    return defer.promise;
  }
  // ============================================================================================================
  // shorts
  // ========================================================================================================
  this.getShorts = () => {
    let defer = $q.defer();
    $http.get(productsPath).then(response=> {
      let productsArr = response.data;
      let shortArr = [];
      productsArr.forEach(product => {
        if(product.type === shorts){
          shortArr.push(product)
          // console.log('this is the short array',shortArr)
          defer.resolve(shortArr)
        }
      })
// console.log (sweaterArr)

    })
    return defer.promise;
  }
  // ============================================================================================================
  // on sale items
  // ========================================================================================================
  this.getOnSaleItems = () => {
    let defer = $q.defer();
    $http.get(productsPath).then(response=> {
      let productsArr = response.data;
      let onSale = [];
      productsArr.forEach(product => {
        if(product.on_sale === true){
          onSale.push(product)
          // console.log('this is the saleItem array', onSale)
          defer.resolve(onSale)
        }
      })
// console.log (sweaterArr)

    })
    return defer.promise;
  }

})

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

  $scope.registerUser = function(user,pw,pwCheck){
   $scope.registered = loginService.registerUser(user,pw,pwCheck);
   if($scope.registered){
     $state.go('login')
   }
  }

})

angular.module('myApp').service('loginService',function($http,$q,$state){
  const storage = localStorage;
  let signedIn = false;
  var currentUser = null;
  var isRegistered = false;
  // var isUserCurrent = storage.getItem('currentUser')
  // console.log(isUserCurrent);
  // (function(){
  //   var isUserCurrent = storage.getItem('currentUser')
  //   if(isUserCurrent){
  //     console.log('the user is current', isUserCurrent)
  //   }
  //   else {
  //     console.log('User is not current', isUserCurrent)
  //   }
  // }())

  this.isUserSignedIn = function() {
    console.log('this is isUserLoggedin',storage.getItem('currentUser'))
  }

  this.loginUser = function(user,pw){
    let proceedToCheckOut = false;


      var userMatch = JSON.parse(localStorage.getItem(user))
      console.log(userMatch)
      if(!userMatch){
        swal('error','please enter a valid username and password else click "register" to register','error')
      }
      else if (userMatch.name !== user || userMatch.password !== pw){
        swal('there is no matching username and password')
      }
      else {
        swal('Login a Success!','you have successfully signed in!','success')
       proceedToCheckOut = true
       signedIn = true;
       currentUser = userMatch.name;
       storage.setItem("currentUser",currentUser)
       console.log(currentUser)
      }

      return proceedToCheckOut
  }
  // this.loginUser = function(user,pw){
  //   let proceedToCheckOut = false;
  //
  //
  //     var userMatch = JSON.parse(localStorage.getItem(user))
  //     console.log(userMatch)
  //     if(!userMatch){
  //       alert('please enter a valid username and passowrd')
  //     }
  //     else if (userMatch.name !== user || userMatch.password !== pw){
  //       alert('there is no matching username and password')
  //     }
  //     else {
  //       alert('you have successfully signed in!')
  //      proceedToCheckOut = true
  //      signedIn = true;
  //      currentUser = userMatch.name;
  //      storage.setItem("currentUser",JSON.stringify(currentUser))
  //      console.log(currentUser)
  //     }
  //
  //     return proceedToCheckOut
  // }
  // ======================================================================================================
  // this.loginUser = function(user,pw){
  //   let proceedToCheckOut = false;
  //
  //
  //     var userMatch = JSON.parse(localStorage.getItem(user))
  //     console.log(userMatch)
  //     if(!userMatch){
  //       alert('please enter a valid username and passowrd')
  //     }
  //     else if (userMatch.name !== user || userMatch.password !== pw){
  //       alert('there is no matching username and password')
  //     }
  //     else {
  //       alert('you have successfully signed in!')
  //      proceedToCheckOut = true
  //      signedIn = true;
  //     }
  //
  //     return proceedToCheckOut
  // }

  this.registerUser = function(name,pw,pwCheck) {
    if(!name || !pw || !pwCheck){
      swal('required fields incomplete','please fill out the following fields','warning')
    }
    else if(pw !== pwCheck){
      swal('error','your passwords are not matching','error')
    }
    else {
      storage.setItem(name,JSON.stringify({
        "name":name,
        "password":pw
      })
      )
      isRegistered = true;
      swal('congratulations','you have successfully made a user account!','success')
    }
    return isRegistered
  }


  this.checkOutAccess = function() {
    if(!signedIn){
      swal('Log into your account','you must first sign in','warning')
    }
    else if (signedIn === true) {
      swal('success','you are already signed in','success')
      // $state.go('checkout')
    }
    return signedIn;

  }



})

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
