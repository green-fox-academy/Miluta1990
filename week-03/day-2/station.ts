'use strict'

import { Car } from './car';
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

class Station {

    stationGasAmount: number;
    
    constructor (stationGasAmount = 1000){

        this.stationGasAmount = stationGasAmount;
    }

refill(Car: Car): void{

            
        this.stationGasAmount = this.stationGasAmount - Car.capacity;
        Car.gasAmount = Car.gasAmount + Car.capacity;
        Car.capacity = 0;
        console.log (`Your car gained gas: ${Car.gasAmount} Capacity: ${Car.capacity} Station has lost gas: ${this.stationGasAmount}`)
            
        

    }
}

export{Station};
