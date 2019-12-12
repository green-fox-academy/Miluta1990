'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.
let radians = (Math.PI / 180) * 360;
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.arc(300, 200, 10, 0, radians);
ctx.fill();