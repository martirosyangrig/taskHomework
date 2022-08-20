"use strict";

// fibonachi

function fibonachi(lngth){   // veradardznum e fibonachii hajordakanutyan mej poxancvox tvi tak gtnvox arjeqe
    
    if(lngth < 2){
        return lngth;
    }else{
        return fibonachi(lngth - 2) + fibonachi(lngth - 1);
    }
}
console.log(fibonachi(5));
console.log(fibonachi(6));


/// factorial

function factorial(n){
    if(n === 1){
        return n;
    }else{
        return n * factorial(n-1);
    }
}

console.log(factorial(5));





