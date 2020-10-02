function sumNumbers(arr){
    let result = arr.reduce((sum, current) => sum + current, 0);
    return result;
}
const numArray = [5,0, 7, 77, -20, 300, 51, 2];
console.log(sumNumbers(numArray));