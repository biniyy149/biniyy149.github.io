/* eslint-disable id-length */
"use strict";
/**
 * 
 * @param {number} a the first number.
 * @param {number} b the second number.
 * @param {number} c the third number.
 * @return {number} max the maximum of three.
 */
function maxOfThree(a,b,c){
    let max = 0;
    if(a>b&&a>c){
        max = a;
    }else if(b>a&&b>c){
        max = b;
    }else{
        max = c;

    }
    return max;
}