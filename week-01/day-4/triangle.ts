'use strict';



// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let lineCount: number = 4;
let star: string = '*';
let out: string = '';
for (let i: number = 0; i < lineCount ; i++) {     //sorok készítése
    out = '';
    for (let j: number = 0; j < i + 1; j++) {    //csilagok készítése soronként  pl. ha i=1 akkor j<2= 1 csillag
        out = out + star;                       // ha i=2 akkor j< 3 azaz 2 csillag stbstb.
    }
    console.log(out);
}