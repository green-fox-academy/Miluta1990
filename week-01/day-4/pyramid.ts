'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


function generatePyramid(num) {
    let number = '';
  
    for (let i = 1; i <= num; i++) {
      console.log(number += i);
    }
  }
  generatePyramid(5)