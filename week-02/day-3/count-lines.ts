'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');
const path: string = './my-txext.txt';
const charEncoding: string = 'utf-8';
let fileContent = ''

function lineCount(fileName: string): any {
   
    try{
        let fileContent = fs.readFileSync(path, charEncoding);
        let textInFile = fileContent.split('\r\n');
        console.log(textInFile.length);
        }
    catch (e){
            console.log('ZERO') ;
        }};

lineCount(fileContent); 



    


