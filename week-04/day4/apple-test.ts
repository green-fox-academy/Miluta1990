'use strict';

import * as test from 'tape';

import { Apple } from'./apple';

test('apple test', function(t:any) {
    const newAppleClass:Apple = new Apple();
    t.equal(newAppleClass.getapple(), 'apple');
    t.end();
  });