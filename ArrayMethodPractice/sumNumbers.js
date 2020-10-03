function sumNumbers(arr){
    let result = arr.reduce((sum, current) => sum + current, 0);
    return result;
}