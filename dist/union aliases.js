"use strict";
function combine(input1, input2, resultType) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultType === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    //return +input1 + +input2;  //moja precica kad hocemo da saberemo samo brojeve bez obzira da li su string ili int
}
console.log(combine(3, 26, 'as-number'));
console.log(combine('3', '26', 'as-number'));
console.log(combine("Fil", "Gog", 'as-text'));
//console.log(combine(5, " times"));
