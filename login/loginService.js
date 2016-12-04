angular.module('myApp').service('loginService',function($http,$q){
  const storage = localStorage;



  this.loginUser = function(user,pw){
    let proceedToCheckOut = false;


      var userMatch = JSON.parse(localStorage.getItem(user))
      console.log(userMatch)
      if(!userMatch){
        alert('please enter a valid username and passowrd')
      }
      else if (userMatch.name !== user || userMatch.password !== pw){
        alert('there is no matching username and password')
      }
      else {
        alert('you have successfully signed in!')
       proceedToCheckOut = true

      }

      return proceedToCheckOut
  }

  this.registerUser = function(name,pw,pwCheck) {
    if(!name || !pw || !pwCheck){
      alert('please fill out the following fields')
    }
    else if(pw !== pwCheck){
      alert('your passwords are not matching')
    }
    else {
      storage.setItem(name,JSON.stringify({
        "name":name,
        "password":pw
      })
      )
      alert('you have successfully made a user account!')
    }
  }
})
