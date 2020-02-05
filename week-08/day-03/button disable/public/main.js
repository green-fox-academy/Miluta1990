'use strict';

const radio = document.getElementsByTagName('input');
const iLoveCatsBTN = document.getElementsByTagName('button')[0];
const signUpBTN = document.getElementsByTagName('button')[1];
const form = document.getElementsByTagName('form')[0];

// If you choose Dog or Cat, it should enable the sign up button
form.addEventListener('click', enableSignUp);

function enableSignUp() {
    if (radio['cat'].checked == true || radio['dog'].checked == true) {
        signUpBTN.removeAttribute('disable');
    } else if (radio['goldfish'].checked == true && radio['no'].checked == true) {
        signUpBTN.removeAttribute('disable');
    } else {
        signUpBTN.removeAttribute('disable', 'true');
    }
};
// If you choose Yes for cat facts, it should enable the I love cats button

form.addEventListener('click', iLoveCats);

function iLoveCats() {
  radio['yes'].checked == true ? iLoveCatsBTN.removeAttribute('disabled') : iLoveCatsBTN.setAttribute('disabled', 'true');
};
