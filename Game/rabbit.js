let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  //rabbit object will call the full property
  alert(rabbit.eat());