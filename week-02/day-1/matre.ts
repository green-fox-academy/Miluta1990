'use strict'

let myMatrix: number[][]= [[1,2,3],
                          [4,5,6],
                          [7,8,9],
                          ];
console.log(myMatrix[0][0]);

// egy olyan lista, aminek minden eleme egy lista

console.table(myMatrix);

console.log(myMatrix[2][1]);  //kiadja, hogy ez a 8as

for(let i:number; i < myMatrix.length; i++) {
    for (let j:number = 0; j < myMatrix[i].length, i++;);
    //console.log(i , j)
    console.log(myMatrix[1]);       //ha szám egy eleme az a sor

}

let firstLine: number[] = myMatrix[0];
let firstElement: number = myMatrix[0][0]; //attól függg hány számot irok be, változnak a tipusok



