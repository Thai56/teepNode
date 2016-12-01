angular.module('myApp').service('myService', function($http,$q){
  // ========================================================================================================
  // VARIABLES
  // ========================================================================================================
  const productsPath = '../../products/products.json'
  const cap = 'cap';
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
      var productsArr = response;
      var hatArr = [];
      productsArr.forEach(product => {
        if(product.type === cap){
          hatArr.push(product)
          console.log(hatArr)
          defer.resolve(hatArr)
        }
      })


    })
    return defer.promise;
  }

})
