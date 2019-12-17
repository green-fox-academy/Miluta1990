'use strict'

class PostIt {

    backgroundColor: string;
    text: string;
    textColor: string;


constructor(backgroundColor: string , text: string , textColor:string ) {

    this.backgroundColor = backgroundColor; 
    this.text = text;
    this.textColor = textColor;
}


checkMyPostIt(): void {
    console.log(`Post it background is ${this.backgroundColor}, text on it is:${this.text}, textcolor is:${this.textColor}`)
}
}

let PostIt1 = new PostIt('orange', 'Whatever', 'black');
let PostIt2 = new PostIt('green', 'Hello', 'blue');
let PostIt3 = new PostIt('yellow', 'I am Batman', 'red');

PostIt1.checkMyPostIt();
PostIt2.checkMyPostIt();
PostIt3.checkMyPostIt();
