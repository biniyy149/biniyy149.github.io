/*
let name = "John";
function sayHi() {
console.log("Hi, " + name);
}
name = "Pete";
console.log(sayHi())*/
function makeWorker() {
    let name = "Pete";
    return function() {
    console.log(name);
    };
    }
    let name = "John";
    // create a function
    let work = makeWorker();
    // call it
    work();