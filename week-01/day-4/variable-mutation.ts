'use strict';

let a: number = 3;
// make it bigger by 10
a = 3 + 10

console.log(a);

let b: number = 100;
// make it smaller by 7
b = 100 - 7
console.log(b);

let c: number = 44;
// double c's value
c = 44 * 4
console.log(c);

let d: number = 125;
// divide d's value by 5
d = 125 / 5
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e = 8 ** 3
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
let biGger: boolean=true;

if(f2>f1){biGger=true} else{biGger=false};
console.log(biGger);
let g1: number = 350;
let g2: number = 20;
// tell if the double of g2 is bigger than g1 (pras a boolean)
let moRe: boolean = true

if(g2 * 2 > g1) {moRe = true} else {moRe = false}; 
console.log(moRe);
let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
let x: number = 11
console.log(h%x)


let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log(i1 > i2 ** 2 && i1 < i2 ** 3)
let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
console.log(j%3 || j%5 )