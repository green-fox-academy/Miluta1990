'use strict'

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter



let myNumber: number = 3

function sum(until: number): number {

let summyNumber = 0;
for (let i:number = 0; i <= myNumber; i++) {

    summyNumber +=i ;
}
console.log(summyNumber)
return summyNumber
}

sum(myNumber)
