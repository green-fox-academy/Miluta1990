'use strict'

let myObject = {

    eggs: 200,
    milk: 200,
    fish: 400,
    apples: 150,
    bread: 50,
    chicken: 550

}

//console.log(myObject.hasOwnProperty('workplace')); van-e benne


// console.log(Object.keys(myObject)); ez kiirja a neveket

// How much is fish?

console.log(`Fish is ${myObject['fish']}`);

// What is the most expensive product?

console.log(Object.keys(myObject));

let mostExpensive: number = myObject[0];

for (let i in myObject) {
    let myObjectValue = ''
    myObject[i] = myObjectValue

    let myMax: number = 0;
for (let j = 0; j< myobject[i].length; j++) {

     if (myMax < myObjectValue[j])
     myMax = financeList[j];
}



    
}