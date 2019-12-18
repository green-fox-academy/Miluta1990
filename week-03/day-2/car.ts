'use strict'

import { Station } from './station';
/*Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100*/

class Car {

    gasAmount: number;
    capacity: number;

    constructor(gasAmount: number = 0, capacity: number = 100) {

        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
    }


    let MolStation = new Station;
    let Porsche = new Car;

    MolStation.refill(Porsche);

    let OmwStation = new Station;
    let Zsiguli = new Car(20, 80);

    OmwStation.refill(Zsiguli);

export{Car};