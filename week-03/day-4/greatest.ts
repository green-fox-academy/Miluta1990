' use strict'

function greatestCommonDivider(a, b) {
    if (b) {
        return greatestCommonDivider(b, a % b);
    } else {
        return Math.abs(a);
    }
}

console.log(greatestCommonDivider(25,125));
console.log(greatestCommonDivider(24,9));