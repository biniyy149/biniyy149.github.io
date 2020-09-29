//if two functions return same object, a new call
//on the two functions are equall.
let obj = {};
function A() { return obj; }
function B() { return obj; }
alert( new A() == new B() ); // true
