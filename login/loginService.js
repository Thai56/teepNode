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
