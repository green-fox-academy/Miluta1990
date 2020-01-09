'use strict';

/*Write a function that computes a member of the fibonacci sequence by a given index
Create tests for multiple test cases.*/


export function fibonacci(number:number) {
    return number < 1 ? 0
         : number <= 2 ? 1
         : fibonacci(number - 1) + fibonacci(number - 2);
 }
 
 console.log(fibonacci(4));