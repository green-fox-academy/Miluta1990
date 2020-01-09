'use strict';

import * as test from 'tape';

import { fibonacci } from'./fibonacci';

test('cfibonacci', function(t){
    t.deepEqual(fibonacci(4), 3);
    t.end();

});