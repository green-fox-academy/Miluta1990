'use strict';

/*Write a function, that takes two strings and returns a boolean value based on if the two strings
 are Anagramms or not.
Create a test for that.*/

import * as test from 'tape';

import { anagram } from'./anagram';

test('anagrams true',function(t) {
    let wordOne = 'test';
    let wordTwo = 'tset';
    t.equal(anagram(wordOne, wordTwo), true);
    t.end();
});
test('anagrams false',function(t) {
    let wordOne = 'testy';
    let wordTwo = 'tset';
    t.equal(anagram(wordOne, wordTwo), false);
    t.end();
});
