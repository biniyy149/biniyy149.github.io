let arr = [1,2,3,4,5,6,7];
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {Function} a function that will be called by Array.filter
 */
function inBetween(a,b){
    function between(number){
        if(a <= number && number<=b){
            return true;
        }else{
            return false;
        }
    }
    return between;

}
console.log(arr.filter(inBetween(3,6)));