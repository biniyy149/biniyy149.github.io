function myMap(arr,func){
    const newArray = [];
    for(const element of arr){
        newArray.push(func(element));

    }
    return newArray;

}
const testArray = [1,2,3];
function double(num){
    return 2*num;
}
console.log(myMap(testArray,double));