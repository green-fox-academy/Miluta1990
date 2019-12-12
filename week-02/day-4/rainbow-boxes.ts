'use strict';

import { maxHeaderSize } from "http";

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.


   
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.fillStyle = `rgb(
          ${Math.floor(255 - 42.5 * i)},
          ${Math.floor(255 - 42.5 * j)},
          0)`;
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }

  


 






