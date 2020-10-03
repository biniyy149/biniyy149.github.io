function pullAge(person){
    return person.age;
}
const ageArray = peopleArray.map(pullAge);
console.log(ageArray);
ageArray.filter(findEven);
function findEven(number){
    if(number % 2 ===0){
        return true;
    }else{
        return false;
    }
}
console.log(peopleArray.map(pullAge).filter(findEven));
evenArray.reduce(average,0);
function sum(accum,current){
    return accum + current;

}
console.log(peopleArray.map(pullage).filter(findEven).reduce(sum,0));