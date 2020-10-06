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
    console.log(startTime);
    currentTime = currentTime-1;
}
console.log(stopWatch(3));


}