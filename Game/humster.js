let hamster = {
    stomach: [],
  
    eat(food) {
      // assign to this.stomach instead of this.stomach.push
      this.stomach = [food];
    }
  };
  
  let speedy = {
     __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Speedy one found the food
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // Lazy one's stomach is empty
  alert( lazy.stomach ); // <nothing>