'use strict'

/*Given base and n that are both 1 or more, compute recursively 
(no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).*/

function unlimitedPower (base:number , num:number){

    if (num < 1 || base < 1) {

        return 'Base and num must be at least 1!';

    }

    if (num === 1 ) {

        return base;
    }  
    else {

        return base**num;
    }

}


console.log(unlimitedPower(10,2));
console.log(unlimitedPower(10,0));
console.log(unlimitedPower(10,1));