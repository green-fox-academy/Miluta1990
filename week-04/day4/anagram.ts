'use strict';

export function anagram(wordOne: string, wordTwo: string) {

    if(wordOne.toLowerCase().split('').sort().join('') === wordTwo.toLowerCase().split('').sort().join('')) 
    return true; 
    else return false;
}

