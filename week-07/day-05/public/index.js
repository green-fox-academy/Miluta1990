'use strict';

const mainContent = document.querySelector('main');

fetch('/posts')
  .then(res => res.text())
  .then(content => mainContent.innerText = content);


let button = document.getElementsByClassName('subBTN')[0];


function clickNewpost(x) {
  console.log(x);
    window.location = '/newpost';
};

button.addEventListener('click', () => clickNewpost('milan a kiraly'));

let paragraph = document.createElement('p');