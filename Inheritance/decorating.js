Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  // check it
  function f(a, b) {
    console.log(( a + b ));
  }
  
  console.log(f.defer(1000)(1, 2)); // shows 3 after 1 sec
  function defer1(ms){
    func = this;
    return function(x,y){
      setTimeout(func,ms,x,y);
    }
  }
  Function.prototype.defer1 = defer1;
  console.log(f.defer1(2000)(2,5));