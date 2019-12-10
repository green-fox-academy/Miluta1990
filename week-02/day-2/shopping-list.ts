'use strict'

let myShoppingList: string[] = ['eggs'  ,'fish', 'apples', 'bread', 'chicken'];

//Do we have milk?

function inList(myShoppingList){

    for (let i:number = 0 ; i < myShoppingList.length; i++){

    if ( myShoppingList[i] === 'milk')
       { 
        return 'We have milk!'
    }
}

        return 'We do not have milk!'

};

console.log(inList(myShoppingList));

