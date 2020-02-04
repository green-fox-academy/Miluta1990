'use strict';

/*On the click of the button,
Count the items in the list
And display the result in the result element.*/

let button = document.querySelector('button');
button.addEventListener('click', countElements());

function countElements() {
    let result = document.getElementsByTagName('li').length;
    let display = document.querySelector('p');
    display.innerHTML = result;
};


