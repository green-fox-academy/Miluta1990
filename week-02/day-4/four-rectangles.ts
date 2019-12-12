'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.strokeStyle = 'blue';
ctx.strokeRect(10, 10, 90, 90);
ctx.strokeStyle = 'red';
ctx.strokeRect(10, 290, 100, 100);
ctx.strokeStyle = 'yellow';
ctx.strokeRect(490, 290, 80, 80);
ctx.strokeStyle = 'purple';
ctx.strokeRect(490, 10, 70, 70);