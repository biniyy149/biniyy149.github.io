/* eslint-disable id-length */
"use strict";
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