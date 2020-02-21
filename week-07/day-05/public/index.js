'use strict';

const mainContent = document.querySelector('main');

fetch('/posts')
  .then(res => res.text())
  .then(content => mainContent.innerText = content);

let button = document.getElementsByClassName('submit');

button.addEventListener('click', function(){
    alert('only 1 button clicked');
    window.location = 'http://www.google.hu';
});