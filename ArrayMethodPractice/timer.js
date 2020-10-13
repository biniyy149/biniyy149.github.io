/**
 * 
 * @param {number} startTime 
 * @returns {undefined}
 * side effect is to log out currenft number every second 
 */
function stopWatch(startTime){
    let currentTime = startTime;

    setInterval(logTime,1000);
    /**
 * 
 */
function logTime(){
    console.log(currentTime);
    if(currentTime ===0){
        clearInterval(watchID)
    }else{
        currentTime = currentTime-1;
    }
}
console.log(stopWatch(3));
console.dir([1,2,3]);
function makeCounter(){
    let count = 0;
    return function(inc){
        if(inc === undefined){
            inc = 1;
        }
        if(inc > 3){
            //return warning
            inc = inc +1;
            return inc;
        }else{
            return count++;
        }
    }
}


}