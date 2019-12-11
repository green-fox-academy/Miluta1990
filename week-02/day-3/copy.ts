'use strict'


// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful


const fs = require('fs');
let source: string = './my-file.txt'
let destination: string = './destination.txt'



fs.copyFile(source, destination, (err) => {
  if (err) throw err;
  console.log('The copy was succesfull!');
});

