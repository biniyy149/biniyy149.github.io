//the property eat is deleted from the prototype. It doesn't exist anymore
// alert show undefined

function Rabbit() {}
Rabbit.prototype = {
eats: true
};
let rabbit = new Rabbit();
delete Rabbit.prototype.eats;
alert( rabbit.eats ); 
