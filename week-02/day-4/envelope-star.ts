'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// width = 400 length = 400;

let stepper: number = 20; 

for (let i:number = 0; i<=canvas.width/stepper/2 ; i++) {

    ctx.beginPath();
    ctx.moveTo(canvas.width /2 , 0);
    ctx.lineTo(canvas.height , i*stepper);
    ctx.strokeStyle = 'purple';
    ctx.stroke()
}