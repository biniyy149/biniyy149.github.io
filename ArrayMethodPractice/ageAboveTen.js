{
function ageAboveTen(arr){
    let ageGreaterThanTen = arr.filter(obj => obj.age>10);
    return ageGreaterThanTen;
}
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
    "Barney", age: 80}];
console.log(ageAboveTen(peopleArray));
describe("ages which are above 10", function() {

    it("Ages which are above 10", function() {
      assert.deepEqual(ageAboveTen(peopleArray),[{name: "Sam", age: 15},{name: "Lucy", age: 13}] );
    });
  
    it("max of three numbers", function() {
      assert.equal(maxOfThree(-4,-9,-12), -4);
    });  
  
  });
}
