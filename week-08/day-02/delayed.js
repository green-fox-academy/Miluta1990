'use strict';

let button = document.querySelector('button');
let textContainer = document.querySelector('div');

button.addEventListener('click', delayedText);

function delayedText(event) {
    setTimeout(() => {
        textContainer.textContent = 'Magic happens after 5 seconds! '
    }, 2000);
    setTimeout(() => {
        textContainer.textContent = 'Wingardium leviosa! '
    }, 5000);
    setTimeout(() => {
        textContainer.textContent = 'Its LeviOOsa not Leviosaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa! '
    }, 8000);
};