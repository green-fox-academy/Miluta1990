'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// width = 400 length = 400;

let stepper: number = 10; 
ctx.translate(canvas.width/2, canvas.height/2)
for (let j:number = 0 ; j <= 4 ; j++) {

    ctx.rotate(90*Math.PI / 180);


for (let i:number = 0; i<=canvas.width/stepper/2 ; i++) {

    ctx.beginPath();
    ctx.moveTo((i+1)*stepper , 0);
    ctx.strokeStyle = 'orange';
    ctx.lineTo(0, canvas.height /2 -((i-1)*stepper  ));
    ctx.stroke()
}}
