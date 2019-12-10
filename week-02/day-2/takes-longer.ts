'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let insert: string = 'always takes longer than'

console.log(quote.indexOf('It'));
console.log(quote.indexOf('you'));

console.log(quote.substring(0,21) + insert + ' ' +quote.substring(21));




