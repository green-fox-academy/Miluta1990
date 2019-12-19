'use strict'

/*We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of 
ears across all the bunnies recursively (without loops or multiplication).*/


function bunnyEars(bunnyNumber: number) {

    let Ears = 2;
    
    if (bunnyNumber <= 0) {

        return 'You cant have NO BUNNIES!!'
    }else 

    return bunnyNumber * Ears;

}

console.log(bunnyEars(5)); 