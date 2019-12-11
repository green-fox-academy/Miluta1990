'use strict'

// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
const path: string = './reverse.txt';
const charEncoding: string = 'utf-8';


function reverse(source:string){
let reverseText = fs.readFileSync(path, charEncoding).reverse();
let normalText:string = '';
for(let i:number=0; i<=reverseText.length; i++){
    normalText =  normalText + reverseText[i];
  }
  console.log(normalText);
}
console.log(reverse('normaltext.txt'));