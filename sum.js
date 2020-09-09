

/* eslint-disable id-length */
"use strict";

/**
 * 
 * @param {Array} arr - arrays of numbers
 * @return {number} sum - sum of numbers
 */


function sumOf(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];

    }
    return sum;
}
console.log(sumOf([1,2,3]));
