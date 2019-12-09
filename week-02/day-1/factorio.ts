'use strict'

// -  Create a function called `factorio`
//    that returns it's input's factorial



function factorio(until: number): number {           // 4! = 4*3*2*1= 24

if (until === 0){
  return 1;
} else {

    let factorial: number = 1
    for ( let i: number = 1; i <= until; i++) {
    factorial *= i;
    }
    console.log(factorial)
    return factorial;
    }
}
console.log(factorio(0));


