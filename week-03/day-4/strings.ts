'use strict'

/*Given a string, compute recursively (no loops) 
a new string where all the lowercase 'x' chars have been changed to 'y' chars.*/


function switchXtoY(text: string) {

    if (text === '') {

        return '';
    }

    else if (text[0] === 'x') {

        return 'y' + switchXtoY(text[1]) ;
    }else {

        return text ;
    } 
}
    console.log(switchXtoY('xxxigxxx'));


