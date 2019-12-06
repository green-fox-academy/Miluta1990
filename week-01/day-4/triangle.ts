'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let bodyTriangle: string = '';
let i:number=1;

while (i <= lineCount) {
    bodyTriangle = bodyTriangle + '*';
    console.log(bodyTriangle);
    i++;
}