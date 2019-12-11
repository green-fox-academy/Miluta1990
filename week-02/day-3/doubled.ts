'use strict'

// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');
const path: string = './doubled.txt';
const charEncoding: string = 'utf-8';


function decryptduplicated(source:string){
let cryptedText = fs.readFileSync(path, charEncoding).replace('\r','');
let decrypedText:string = '';
for(let i:number=0; i<=cryptedText.length; i+=2){
    decrypedText =  decrypedText + cryptedText[i];
  }
  console.log(decrypedText);
}
console.log(decryptduplicated('doubled-dec.txt'));