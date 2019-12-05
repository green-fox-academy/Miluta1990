'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let inputNumber: number = 6
let sumUp: number = 0
let average: number;

for (let i:number = 1; i>=inputNumber; i++) {

    sumUp = inputNumber + i ;
    average = sumUp/inputNumber;
}
    
console.log('Sum: ' + sumUp + ' ' + 'Average: ' + average );