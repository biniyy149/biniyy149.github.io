function filterEven(arr){
    let filteredEven = arr.filter(num => num%2 === 0);
    return filteredEven;
}

const numArray = [5,0, 7, 77, -20, 300, 51, 2];
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}];
let filteredEven = numArray.filter(num => num%2 === 0);
console.log(filteredEven);
let ageAboveTen = peopleArray.filter(obj => obj.age>10);
console.log(ageAboveTen);
let foundEven = numArray.find(num => num%2 === 0);
console.log(foundEven);
let evenIncluded = numArray.includes(num => num%2 === 0,0);
console.log(evenIncluded);
let foundAge = peopleArray.find(obj => obj.age>10);
console.log(foundAge);
