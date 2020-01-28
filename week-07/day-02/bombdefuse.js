'use strict';

// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
    // If you click on the button set the display to "Bomb defused" and stop the timeout
    // Extra: create an interval which will update the remaining seconds in the display

    const display = document.getElementsByClassName('display')[0];
    const button = document.getElementsByTagName('button')[0];
    button.onclick = defuse; 
    
    function defuse() {
        if(display.innerHTML !== 'Bomb exploded') {
            display.innerHTML = 'Bomd defused';
            clearInterval(timer);
        }
    };

    let counter = 10;
    function countDown () {
        counter --;
        display.innerHTML = counter;
      if (counter === 0){
        clearInterval(timer);
        display.innerHTML = 'Bomb exploded';
      };
    };
    let timer = setInterval(countDown, 1000);
    
   
     