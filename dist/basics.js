"use strict";
function sabiranje(n1, n2, showResult, tekst) {
    // if (typeof n1 !== 'number'){
    //     throw new Error ("Nije broj!");
    // }
    console.log(typeof (showResult));
    return `${tekst}${n1 + n2}`;
}
let a;
a = 5;
const b = 3.6;
const printResult = true;
let tekst = "Rezultat je: ";
console.log(sabiranje(a, b, printResult, tekst));
