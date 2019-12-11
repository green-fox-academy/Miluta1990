'use strict'

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');
const path: string = './my-fileee.txt';
const charEncoding: string = 'utf-8';
let fileContent = ''

function manipulateFile(Filename: string): any {

    try{
        let fileContent = fs.readFileSync(path, charEncoding);
        let whatIWrite: string = 'Milan';
        
        fs.writeFileSync(path, whatIWrite, charEncoding);

        console.log(fileContent);

    }
    catch (e){
        console.log('Unable to write file: my-file.txt');
    }

}

manipulateFile(fileContent);