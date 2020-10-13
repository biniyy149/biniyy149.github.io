//the same object is referenced by both Rabbit.prototype and by [[Prototyp]]
// of the rabit object; we can apdate it by either of the two.
// so the alert shows false.

function Rabbit() {}
Rabbit.prototype = {
eats: true
};
let rabbit = new Rabbit();
Rabbit.prototype.eats = false;
alert( rabbit.eats ); // ?