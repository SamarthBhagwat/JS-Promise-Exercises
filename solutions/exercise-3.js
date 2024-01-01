console.log("Program started");
var promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({
      data: "Hello, friend!", 
      error: null
    });
  }, 5000)

  // setTimeout(function(){
  //   reject()
  // }, 2000);
});

console.log(promise);
console.log("Program in progress");
promise
  .then(
    function(value){
      console.log(value);
      return new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("First promise chain complete!");
        }, 2000)
      });
    }
  )
  .then(
    function(value){
      console.log(value);
    }
  )

promise
  .then(
    function(value){
      console.log(value);
      return new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("Second promise chain complete!");
        }, 10000)
      });
    }
  )
  .then(
    function(value){
      console.log(value);
    }
  )
