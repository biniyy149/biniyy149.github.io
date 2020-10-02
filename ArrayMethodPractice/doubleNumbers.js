{
function doubleNum(arr){
    let doubledArray = numArray.map(num => 2*num);
    return doubledArray;

}
const numArray = [5,0, 7, 77, -20, 300, 51, 2];

console.log(doubleNum(numArray));
describe("doubleNum", function() {
    it("returns two times each element of array", function() {
        const numArray = [5,0, 7, 77, -20, 300, 51, 2];
  
      assert.deepEqual( doubleNum(numArray), [10,0,14,154,-40,600,102,4] );
    });
  
  });
}



