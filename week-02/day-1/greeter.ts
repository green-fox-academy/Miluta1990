'use strict'

// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`

let nametoGreet: string = 'Green Fox'

function greet(string) {

    let greet1: string = ' Greetings, dear' + ' ' + string 
    console.log(greet1);
}

greet(nametoGreet);