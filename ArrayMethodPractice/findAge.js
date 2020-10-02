function findAge(arr){
    let foundAge = arr.find(obj => obj.age>10);
    return foundAge;
}
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
    "Barney", age: 80}];
console.log(findAge(peopleArray));
