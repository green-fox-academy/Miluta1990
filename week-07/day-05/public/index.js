'use strict';

const mainContent = document.querySelector('main');

fetch('/posts')
  .then(res => res.text())
  .then(content => mainContent.innerText = content);