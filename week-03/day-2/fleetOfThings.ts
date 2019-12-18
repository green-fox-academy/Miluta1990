'use strict'

import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

//get fletofthings

const toDo1: Thing = new Thing('Get Milk');
const toDo2: Thing = new Thing('Remove the obstacles');
const toDo3: Thing = new Thing('Stand up');
const toDo4: Thing = new Thing('Eat lunch');

fleet.add(toDo1);
fleet.add(toDo2);

fleet.add(toDo3);
toDo3.getCompleted();
toDo3.complete();

fleet.add(toDo4);
toDo4.getCompleted(),
toDo4.complete();


fleet.getThings();

function listMyToDoInfo() {

   for (let j:number = 0; j < fleet.getThings().length; j++){
if (fleet.getThings() [j].getCompleted()){
   console.log(`[x] ${fleet.getThings() [j].getName()}`);
}   else {
   console.log(`[] ${fleet.getThings() [j].getName()}`);
}
} 
}
listMyToDoInfo();