function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
  //else is not required for the above code
  //we can just return confirm outside the if clause.

  //i will do the function using tertiary notation.
  function checkAge(age){
    return (age > 18)? ture:confirm('did parents allow you?');
  }
  //the minimum of the two numbers
  function min(a,b){
    if(a<b){
      return a;
    }else{
      return b;
    }
  }
  //the power of a number
  function pow(x, y) {
    let initial = x;
  
    for (let i = 1; i < y; i++) {
      initial *= x;
    }
  
    return initial;
  }
