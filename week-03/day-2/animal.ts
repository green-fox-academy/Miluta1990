/*Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one*/

'use strict'

class Animal {

    hunger: number;
    thirst: number;

    constructor (hunger: number = 50, thirst: number = 50) {

        this.hunger = hunger;
        this.thirst = thirst;
    }

eat () {

    this.hunger--;
    console.log(`your animal lost hunger: ${this.hunger}`);
}
drink(){

    this.thirst--;
    console.log(`your animal lost thirst: ${this.thirst}`);
}
play(){

    this.thirst++;
    this.hunger++;
    console.log (`your animal played, thirst: ${this.thirst} hunger: ${this.hunger}`)
}
}
const Pamacs = new Animal;
Pamacs.play();
Pamacs.drink();
Pamacs.eat();