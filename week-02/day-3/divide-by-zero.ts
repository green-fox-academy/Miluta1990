'use strict'


// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide(number) {

    if (number !== 0) {
        let result = 10 / number
    console.log(`Our result is ${result}`);
}else{
    return 'FAIL';
}
}
console.log(divide(0));
divide(20);