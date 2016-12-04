angular.module('myApp').service('loginService',function($http,$q){
  const storage = localStorage;

  this.loginUser = function(user,pw){
    console.log('firing')
    var userMatch = JSON.parse(localStorage.getItem(user))
    if(userMatch.name !== user && userMatch.pw !== pw ){
      alert('there was no match')
    }
  }


})
