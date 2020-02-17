'use strict';

let promise = Promise.resolve('Secret Value');

promise.then(console.log).catch(console.log)