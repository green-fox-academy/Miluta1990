'use strict';

import * as test from 'tape';

import { add } from'./add';

test(function (t) {
  t.equal(add(1, 2), 3);
  t.end();
});
