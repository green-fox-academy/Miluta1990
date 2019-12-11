'use strict'

// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'

const fs = require('fs');
const path: string = './my-file.txt';
const charEncoding: string = 'utf-8';
let myWord: string = 'apple';
let lines: number = 5;


function awesomeFunction(path: string, word:string, number: number ) {

        for (let i: number = 1;i <= lines; i++){
            fs.appendFileSync(path, myWord + '\r\n');
            
        }
}

awesomeFunction(path, myWord ,lines);

 