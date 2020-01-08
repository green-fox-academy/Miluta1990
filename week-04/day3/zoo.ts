'use strict'

abstract class Animal {
    name: string;
    age: number;
    gender: string;
    color: string;

    constructor(name:string) {
        this.name = name;
    }

    getName() {};
    breed() {};
}
class Mammals extends Animal {
    getName(): string {
        return this.name;
    }
    breed(): string {
        return 'pushing miniature versions out.'
    }
}

class Bird extends Animal {
    getName(): string {
        return this.name;
    }
    breed(): string {
        return 'laying eggs.'
    }
}
class Reptile extends Animal {
        getName(): string {
            return this.name;
        }
        breed(): string {
            return 'laying eggs.'
        }
    }

const reptile = new Reptile('Crocodile');
const mammal = new Mammals('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);