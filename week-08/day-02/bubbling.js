'use strict';

/*Here is an image inspector, but the buttons are not implemented yet, that will
      be your task!
       - the nav buttons (up, down, left, right) move the background by 10px
       - the zoom buttons increase/decrease the image by 20%
       - attach only two event listeners to the nav element
         - one for navigation
         - one for zooming*/

let posX = 0;
let posY = 0;
let size = 1000;

const navigation = (event) => {

    let direction = event.target.dataset.direction;
    let inspector = document.querySelector('.img-inspector');

    if (direction === 'up') {
        posY += 10;
        inspector.style.backgroundPositionY = posY + 'px';
    };
    if (direction === 'down') {
        posY -= 10;
        inspector.style.backgroundPositionY = posY + 'px';
    };
    if (direction === 'left') {
        posX -= 10;
        inspector.style.backgroundPositionX = posX + 'px';
    };
    if (direction === 'right') {
        posX += 10;
        inspector.style.backgroundPositionX = posX + 'px';
    };
    if (direction === 'in') {
        size += 20;
        inspector.style.backgroundSize = size + 'px';
    };
    if (direction === 'out') {
        size -= 20;
        inspector.style.backgroundSize = size + 'px';
    };
};

document.querySelector('nav').addEventListener('click', navigation);
