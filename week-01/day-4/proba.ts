'use strict';

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
console.log(j%3 || j%5 );
let divisible: boolean = true ;
if (j%3 === 0 ) {console.log(divisible)} else {console.log('false')};
if (j%5 === 0 ) {console.log(divisible)} else {console.log('false')};