'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
// surface = (a*b + a*c + b*c)*2
//Volume = a*b*c
let myCuboidHeight: number = 10
let myCuboidWidth: number = 10
let myCuboidLenght: number = 10

console.log((myCuboidHeight*myCuboidWidth + myCuboidHeight*myCuboidLenght+myCuboidWidth*myCuboidWidth)*2);
console.log(myCuboidHeight*myCuboidLenght*myCuboidWidth);