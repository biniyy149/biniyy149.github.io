

/* eslint-disable id-length */
/* eslint_disable "valid-jsdoc" */
/* eslint_disable "require-jsdoc" */
"use strict";


function sumOf(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];

    }
    return sum;
}
console.log(sumOf([1,2,3]));
/**
 * 
 * @param {Array} arr - arrays of numbers
 * @return {number} sum - sum of numbers
 */
