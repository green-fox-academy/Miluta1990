'use strict';

import * as test from 'tape';

import { countAllCharacters } from'./count-letters';


test('countcharacters', function(t){
    t.deepEqual(countAllCharacters('banana'), {b: 1, a: 3, n: 2});
    t.end();

});