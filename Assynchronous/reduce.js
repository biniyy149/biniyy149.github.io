/**
 * 
 * @param {Array} arr of values to reduce
 * @param {Function} func call back to do the reducing
 * @param {*} init vvalue to start as acumulator
 * @returns {*} the final value of the accumulator
 */
function myReduce(arr,func,init){
    let accumulator = init;
    for(const element of arr){
        accumulator = func(accumulator,element);
    }
    return accumulator

}
const testArray = [1,2,3,4];
myReduce(testArray,(sum,ele)=>sum+ele,0);
myReduce(testArray,sumFun,0);
myReduce(testArray,function(acc,curr){return acc+curr;},0);
function sumFun(acc,curr){
    return acc + curr;
}