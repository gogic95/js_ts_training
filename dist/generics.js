"use strict";
// const names: Array<string> = [];
// // names[0].split(' ');
function genericTest(input) {
    return input;
}
// // console.log(genericTest(4));
// // console.log(genericTest("aaa"));
// // console.log(genericTest([5,"dd"]));
// const promise: Promise<string> = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("This is done!!!");
// 	}, 2000);
// });
// promise.then(data => {
//     data.split(' ');
// })
// function merge<T, K>(objA: T, objB: K) {     //bez constraints
// 	return Object.assign(objA, objB);
// }
function merge(objA, objB) {
    //sa constraints
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Filip" }, { age: 34 });
const mergedObj2 = merge({ name: "Filip", hobbies: ["Progr", "Digital marketing"] }, { age: 34 });
console.log(mergedObj.age);
console.log(mergedObj2.hobbies);
function countAndDescribe(element) {
    let descriptionText = "Has no value..";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Cao brate!"));
console.log(countAndDescribe(["Kola", "Stan"]));
console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "Filip" }, "name");
class Skladiste {
    constructor() {
        this.data = [];
    }
    // constructor(public item: T) {}
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); //ako ne nadje element brise poslednji iz niza
    }
    getItems() {
        return [...this.data];
    }
}
const tekstSkladiste = new Skladiste();
tekstSkladiste.addItem("aaa");
tekstSkladiste.addItem("bbb");
tekstSkladiste.addItem("ccc");
tekstSkladiste.removeItem("bbb");
console.log(tekstSkladiste.getItems());
const numberSkladiste = new Skladiste();
numberSkladiste.addItem(5);
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const imena = ['Filip', 'piliF'];
// imena.push('Ffiillliiippp');         ne moze jer sam stavio da bude readonly
// imena.pop();
