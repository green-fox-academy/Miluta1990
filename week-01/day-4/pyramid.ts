'use strict';



// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let star: string = '*';
let out: string = '';

for (let i: number = 0; i < lineCount; i++) {                 //SORÉPÍTÉS
    out = '';
    for (let j: number = 0; j < lineCount - i; j++) {           // space építés pl1 4-0=4 space az elején stb stb
        out = out + ' '; 
    } 
    for (let k: number = 1; k <= 2 * i + 1; k++) {            // csillagéptés 
            out = out + star;                                   // 0. sor: 2*0+1= 1 csillag 
        }                                                       // 1. sor: 2*1+1= 3 csillag
                                                                // 2. sor: 2*2+1=5
                                                                //3. sor: 2*3+1= 7
        console.log(out);
}
