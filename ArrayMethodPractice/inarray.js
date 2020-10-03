function inBetween(a,b){
    /**
     * 
     * @param {number} number 
     * @return {Function} true if the number is ture
     */
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