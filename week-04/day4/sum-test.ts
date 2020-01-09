'use strict';

import { sumClass } from './sum';
import * as test from 'tape';

test('3 sum test', function(t:any) {
    let newSum1: sumClass = new sumClass();
    let myNumbers1: number[]= [1,2,3];

    t.equal(newSum1.sum(myNumbers1), 6)
    t.end();
});

test('1 sum test', function(t:any) {
    let newSum1: sumClass = new sumClass();
    let myNumbers1: number[]= [123];

    t.equal(newSum1.sum(myNumbers1), 123)
    t.end();
});

test('0 sum test', function(t:any) {
    let newSum1: sumClass = new sumClass();
    let myNumbers1: number[]= [];

    t.equal(newSum1.sum(myNumbers1), 0)
    t.end();
});
