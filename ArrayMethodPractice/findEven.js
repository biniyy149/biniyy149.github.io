function findEven(arr){
    let foundEven = arr.find(num => num%2 === 0);
    return foundEven;
}
const numArray = [5,0, 7, 77, -20, 300, 51, 2];
console.log(findEven(numArray));
console.log(numArray.reduce((curr,accu) =>curr<accu?curr:accu, Infinity));
