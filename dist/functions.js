"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log("Result is: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResults(add(3, 7));
//let combineValues: Function;
let combineValues;
combineValues = add;
printResults(combineValues(3, 459));
addAndHandle(3, 2, printResults);
addAndHandle(3, 5, (result) => {
    console.log(result);
});
