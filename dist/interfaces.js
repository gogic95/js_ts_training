"use strict";
let addF;
addF = (n1, n2) => {
    return n1 + n2;
};
class Person {
    //name: string;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello(tekst) {
        console.log(tekst, this.name);
    }
}
let person1;
let person2;
person1 = {
    name: "Filip",
    sayHello(tekst) {
        console.log(tekst, this.name);
    },
};
person1.sayHello("Cao, ja sam");
person2 = new Person("piliF", 27);
person2.sayHello("Cao, ja sam");
console.log(person2.age);
