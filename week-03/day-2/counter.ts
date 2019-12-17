/*Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value*/

'use strict'

class Counter {

    integer: number;

    constructor (integer: number = 0) {

        this.integer = 0;
    }

add () {

    this.integer +=10;
    console.log(this.integer);
}
get () {

    this.integer = this.integer;
    console.log(this.integer);
}
reset () {

    this.integer = 0;
    console.log(this.integer);
}
}
let integer1 = new Counter; 

integer1.add();
integer1.add();
integer1.get();
integer1.reset();
integer1.add();