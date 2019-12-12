'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const height = 400;
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.


/*
function drawDiagonal(xPos, yPos, startX, startY){
    ctx.moveTo (startX, startY)
    ctx.lineTo(xPos, yPos);

    for (let i:number = 0; i <= width;i++)
    for (let j:number = 0; j <= height; j++)
    if (i === 0 && j === 0) {
            startX = i
            startY = j
        ctx.strokeStyle = 'green';
        ctx.stroke()
    }
    else {

        ctx.strokeStyle = 'red';
        ctx.stroke()
    }};

    drawDiagonal(600, 400, 0,0);
    drawDiagonal( - 400, 666, 600 ,0 );
*/

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(600, 400);
ctx.strokeStyle = 'green';
ctx.stroke()

ctx.beginPath();
ctx.moveTo(600, 0);
ctx.lineTo(-400, 666);
ctx.strokeStyle = 'red';
ctx.stroke()


    


    
