'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// width = 400 length = 400;

let stepper: number = 25;

for (let i: number = 0; i <= canvas.width / stepper; i++) {

    ctx.beginPath();
    ctx.moveTo(i*stepper, 0);
    ctx.lineTo(canvas.width, i*stepper);
    ctx.strokeStyle = 'purple';
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(0, i*stepper);
    ctx.lineTo(i*stepper, canvas.height);
    ctx.strokeStyle = 'green';
    ctx.stroke()

}
