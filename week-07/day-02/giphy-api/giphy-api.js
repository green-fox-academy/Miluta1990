'use strict';

const httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=batman&api_key=C1RqrktRa9q4i1tfIuLNylDqcsO6N302')

let data = "";
httpRequest.onload = () => { 
  data = JSON.parse(httpRequest.responseText);
  for(let i=0; i<16; i++){
    let newImage = document.createElement('img');
    newImage.src = data.data[i].images.fixed_height_still.url;
    document.getElementsByTagName('body')[0].appendChild(newImage);
    document.getElementsByTagName('img')[i].setAttribute('onClick',`start(${i})`);
  };
};
httpRequest.send();

