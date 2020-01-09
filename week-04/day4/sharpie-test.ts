'use strict';

import { Sharpie } from './sharpie';
import * as test from 'tape';

test('use sharpie', function(t:any) {
    let newSharpie:Sharpie = new Sharpie('yellow', 40);
    console.log(newSharpie);
    t.equal(newSharpie.use(), undefined);
    t.end();
  });
  test('use sharpie', function(t:any) {
    let newSharpie:Sharpie = new Sharpie('yellow', 40);
    console.log(newSharpie);
    t.equal(newSharpie.use(), 'It has been used, so the ink is now: 99');
    t.end();
  });