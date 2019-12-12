'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

  function drawHorizontalLines(xStart, yStart) {

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart + 50 , yStart);
    ctx.stroke();
}
for (let i:number =0; i <= 400; i+=50) {

    drawHorizontalLines( 0, 0 + i);
}

drawHorizontalLines(200, 250);





