function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
function foo() {
    return "buz";
}
console.log(foo());
console.log(foo);
console.log();
bat = foo;
console.log(bat());
console.log(bat);
console.log(console.log(bat));
const y = console.log("hi");
console.log(y);
let abc = ["abckd","1234",89," "];
let wrapper = [];
let samelength = wrapper[3];
console.log(samelength);
let samesize = [];
wrapper[3] = samesize;
console.log(wrapper);
console.log(+"123");
console.log(+"123");

