'use strict';

const listOfImages = [
  {name:'pic1.jpg', title:'Goku & Vegeta', story:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat sit, architecto mollitia, ullam accusantium consequuntur'},
  {name:'pic2.jpg', title:'Ultra Insict Goku', story:'Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat sit, architecto mollitia, ullam accusantium consequuntur.'},
  {name:'pic3.jpg', title:'Ascended Trrunks', story:'Ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure numquam modi voluptatem nam ullam accusantium consequuntur.'},
  {name:'pic4.jpg', title:'Blue Vegeta', story:'Adipisicing elit. Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat.'},
  {name:'pic5.jpg', title:'Frieza', story:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat sit, architecto mollitia, ullam accusantium consequuntur'},
  {name:'pic6.jpg', title:'SSJ2 Gohan', story:'Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat sit, architecto mollitia, ullam accusantium consequuntur.'},
  {name:'pic7.jpg', title:'Gohan vs Cell', story:'Ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure numquam modi voluptatem nam ullam accusantium consequuntur.'},
  {name:'pic8.jpg', title:'Ultimate Gohan', story:'Adipisicing elit. Distinctio iure numquam modi voluptatem nam. Reprehenderit eos, aperiam optio dolorem eligendi nobis molestiae magnam placeat.'},
];

let currentPictureIndex = 0;

function onKeyPress(event) {
  switch (event.keyCode)
  {
    case 37: slide('left'); break;
    case 39: slide('right'); break;
  }};

  function slide(direction){
    if(direction === 'right'){
      actualImageIndex ++;
      if(actualImageIndex > listOfImages.length-1) actualImageIndex = 0;
      changeMainImage(actualImageIndex);
    };
    if(direction === 'left'){
      actualImageIndex --;
      if(actualImageIndex < 0) actualImageIndex = listOfImages.length-1;
      changeMainImage(actualImageIndex);
    }};
