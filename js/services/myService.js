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
