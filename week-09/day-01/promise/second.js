'use strict';

let simplerPromise = new Promise((fulfill, reject) => {
    setTimeout(() => fulfill('FULFILLED!'), 300);
  });
  
  simplerPromise.then(console.log)