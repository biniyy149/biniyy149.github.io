//the assignment to Rabbit.prototype sets up [[Prototyp]] for new object
//the alert shows ture
function Rabbit() {}
Rabbit.prototype = {
eats: true
};
let rabbit = new Rabbit();
Rabbit.prototype = {};
alert( rabbit.eats ); // ?