var promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(10);
    }, 3000);
});

var promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(20);
    }, 5000);
});

var resultPromise = Promise.all([promise1, promise2]);

resultPromise
  .then(
    function(values){
      let res1 = values[0];
      let res2 = values[1];
      console.log(res1 + res2);
    }
  )
