{
function averageNumbers(arr){
    let result = arr.reduce((sum, current) => sum + current, 0)/arr.length;
    return result;
}
const numArray = [5,0, 7, 77, -20, 300, 51, 2];
console.log(averageNumbers(numArray));
describe("averageNumbers", function() {
    it("returns average numbers", function() {
        const numArray = [5,0,7,77,-20,300,51,2];
  
      assert.deepEqual( averageNumbers(numArray), 52.75 );
    });
  
  });
}

