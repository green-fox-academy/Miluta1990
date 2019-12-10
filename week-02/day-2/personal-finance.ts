'use strict'

let financeList: number[] = [500, 1000, 1250, 175, 800, 120];

let sum: number = 0
for (let i=0; i < financeList.length; i++ ){

    sum += financeList[i];
}

console.log('We spent a total of:' + sum);

let myMax: number = 0;
for (let j = 0; j< financeList.length; j++) {

     if (myMax < financeList[j])
     myMax = financeList[j];
}

console.log(myMax);


let myMin: number = financeList[0]; 
for (let k=0; k < financeList.length; k++) {

    if (myMin > financeList[k])
    myMin = financeList[k];
}

console.log(myMin);

let myAverage: number = 0;
for (let l=0; l < financeList.length; l++) {

myAverage = sum / financeList.length;


}

console.log(myAverage)