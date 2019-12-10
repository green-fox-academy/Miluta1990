'use strit'

let myList: string[] = ['William', "John", "Amanda"];

console.log(myList.length);

    if (myList.length == 0) {
  console.log('myList is empty.')
    } else {
    console.log('The list has got' + ' ' +  myList.length + ' ' + 'objects.');
}

//print out 3rd element

console.log(myList[2]);

//print out each name
    
    for (let i: number = 0 ; i < myList.length; i++) {
        console.log(myList[i]);

    }

    for (let i: number = 0 ; i < myList.length; i++) {
        console.log(i+1+'.' , myList[i]);
    }







