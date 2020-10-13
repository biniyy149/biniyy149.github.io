//the delete operation doesn't have effect, because rabbit don't have eat property

function Rabbit() {}
Rabbit.prototype = {
eats: true
};
let rabbit = new Rabbit();
delete rabbit.eats;
alert( rabbit.eats ); 