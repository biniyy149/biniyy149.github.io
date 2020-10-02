{
function doubleAge(arr){
    let doubledAge = arr.map(obj => 2*obj.age);
    return doubledAge;
}
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}];
console.log(doubleAge(peopleArray));
describe("doubleAge", function() {
    it("returns double age array", function() {
        const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name:
             "Lucy", age: 13}, {name:
            "Barney", age: 80}];
  
      assert.deepEqual( doubleAge(peopleArray), [30, 12, 26, 160] );
    });
  
  });
}



