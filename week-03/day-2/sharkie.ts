/*We should know about each sharpie their color (which should be a string), 
width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount*/

'use strict'

import { UV_UDP_REUSEADDR } from "constants";

class sharpie {

    color: string;
    width: number;
    inkAmount: number;

    constructor(color: string, width: number){

        this.color = color;
        this.width = width;
        this.inkAmount = 100;

    }
    use() {
        this.inkAmount -= 1;
        console.log(`It has been used, so the ink is now: ${this.inkAmount} `)
    }
}
let sharpie1 = new sharpie ('Red', 40);

sharpie1.use();
sharpie1.use();