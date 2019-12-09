'use strict'

let num1:number = 5;
let sum1:number = 0;

for(let i:number =0; i<=num1; i++) {

    sum1 += i;

}
console.log(sum1);

function calcualteSum(until:number) :number {   //function, leirja bév mitcsinál, függvény adatok, mit kérek töle: until egy számot adtam be a zárójelbe
let sum:number = 0;                             //eredmény tipusa szám lesz
    for(let i:number =0; i<=num1; i++) {

        sum1 += i;
}
return sum;   //egy számot fog visszaadni, return kell hozzá hogy egy változoba bee tudjuk tenni
}

let numbersUntilFive = calcualteSum(5);
console.log(numbersUntilFive); 

console.log(calcualteSum(10));