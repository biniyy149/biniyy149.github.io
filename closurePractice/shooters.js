/*returns array
shooter function returns undefined
*/
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () { // shooter function
      console.log(j); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

// Now the code works correctly
console.log(army[0]()); // 0
console.log(army[5]()); // 5
/* 
let timerId = setTimeout(() => console.log("never happens"), 5000);
console.log(timerId); // timer identifier
////clearTimeout(timerId);
console.log(timerId); // same */