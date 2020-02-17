'use strict';

const container = document.querySelector('div');
const button = document.querySelector('button');

button.addEventListener('click', fetchNewJoke);
const URL = 'http://api.icndb.com/jokes/random';

function fetchNewJoke() {
    fetch(URL)
        .then(response => response.json())
        .then(myJson => {
            let paragraph = document.createElement('p');
            paragraph.innerText = myJson['value'].joke;
            container.appendChild(paragraph);
        });
};