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