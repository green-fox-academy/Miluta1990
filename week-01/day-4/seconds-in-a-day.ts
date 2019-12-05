'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let remainingHours: number = 9
let remainingMinutes: number = 26
let remainingSeconds: number = 18

console.log(remainingHours*60*60+remainingMinutes*60+remainingSeconds);
console.log((23-currentHours)*60*60+(60-currentMinutes)*60+60-currentSeconds);
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
