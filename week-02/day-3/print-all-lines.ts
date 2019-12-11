'use strict'

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"


const fs = require('fs');
const path: string = './my-text.txt';
const charEncoding: string = 'utf-8';
const path1: string = './my-tet.txt';

let fileContent = fs.readFileSync(path, charEncoding);
console.log(fileContent);

try{
    let fileContent = fs.readFileSync(path, charEncoding);
    } catch (e){
      console.log('Unable to read: my-tet.txt')};
      console.log('unable to read: my-tet.txt'); 