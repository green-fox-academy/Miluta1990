'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(300, 350);
ctx.strokeStyle = 'green';
ctx.stroke()
ctx.beginPath();
ctx.moveTo(300, 350);
ctx.lineTo(350, 350);
ctx.strokeStyle = 'red';
ctx.stroke()
ctx.beginPath();
ctx.moveTo(350, 350);
ctx.lineTo(350, 300);
ctx.strokeStyle = 'blue';
ctx.stroke()
ctx.beginPath();
ctx.moveTo(350, 300);
ctx.lineTo(300, 300);
ctx.strokeStyle = 'yellow';
ctx.stroke()
