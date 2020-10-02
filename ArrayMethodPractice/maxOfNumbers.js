{
function maxOfNumbers(arr){
    let maxNum = arr.reduce((max, value) => max>value ? max : value , 0);
    return maxNum;
}
const numArray = [5,0, 7, 77, -20, 300, 51, 2];
console.log(maxOfNumbers(numArray));
describe("maxOfNumbers", function() {
    it("returns maximum mumber of array", function() {
        const numArray = [5,0, 7, 77, -20, 300, 51, 2];
  
      assert.deepEqual( maxOfNumbers(numArray), 300 );
    });

  
  });
}

