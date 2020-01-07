'use strict'

import { Flower } from './Flower';
import { Tree } from './Tree';

/*The Garden
is able to hold unlimited amount of flowers or trees
when watering it should only water those what needs water with equally divided amount amongst them
eg. watering with 40 and 4 of them need water then each gets watered with 10
The Flower
needs water if its current water amount is less then 5
when watering it the flower can only absorb the 75% of the water
eg. watering with 10 the flower's amount of water should only increase with 7.5
The Tree
needs water if its current water amount is less then 10
when watering it the tree can only absorb the 40% of the water
eg. watering with 10 the tree's amount of water should only increase with 4*/

class Garden {
    allFlowers: Flower[] = [];
    allTrees: Tree[] = [];


    plant(typePlant: string, color: string){
        if(typePlant === 'flower') {
            this.allFlowers.push(new Flower(color));
        }
        else if(typePlant === 'tree') {
            this.allTrees.push(new Tree(color));
        }
    }
    showGarden(){
        for(let i:number=0; i<this.allFlowers.length; i++){
          console.log(`The ${this.allFlowers[i].color} Flower `);
        };
        for(let i:number=0; i<this.allTrees.length; i++){
          console.log(`The ${this.allTrees[i].color} Tree `);
        };
      };
     

    //watering
 water (waterAmount: number) {


 }

};  
let myGarden = new Garden();

myGarden.plant('flower', 'yellow'); 
myGarden.plant('flower', 'blue');
myGarden.plant('tree', 'orange'); 
myGarden.plant('tree', 'purple');
myGarden.showGarden();