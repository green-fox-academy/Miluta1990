'use strict'

/*We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of 
ears across all the bunnies recursively (without loops or multiplication).*/


function bunnyEars(bunnyNumber: number) {

    let Ears = 2;

    if (bunnyNumber <= 0) {

        return 0;
    }else 

    return  Ears + bunnyEars(bunnyNumber-1);
    
}

console.log(bunnyEars(10)); 
console.log(bunnyEars(0));
console.log(bunnyEars(-3));