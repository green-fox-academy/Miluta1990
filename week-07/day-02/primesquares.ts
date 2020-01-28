'use strict'

//   1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
function numberGenerator() {
    for (i = 2; i <= 100; i++) {
    document.getElementsByTagName('section')[0].appendChild(document.createElement('div')).innerText = i;
};
};
//   2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
};
function primeCheck(index) {
    let numbersArray = document.getElementsByTagName('div');
    console.log(isPrime(numbersArray[index].innerText)) ;
    if (isPrime(numbersArray[index].innerText)) {
        numbersArray[index].setAttribute('class', 'prime');
    } else {
        numbersArray[index].setAttribute('class', 'not-prime');
    };
};

numberGenerator();

//   3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//    - the timer should fire every 100ms
//    - the timer should stop when there are no more elements left to be colored

let index= 0;
let superInterval = setInterval(() => {
    primeCheck(index);
    index += 1
    if (index == 100) {
        clearInterval(superInterval);
    }
}, 100)