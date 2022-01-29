interface AddFn {
	(a: number, b: number): number;
}

let addF: AddFn;
addF = (n1: number, n2: number) => {
	return n1 + n2;
};

interface Named {
	readonly name: string;
	outputName?: string; // OPTIONAL PROPERTY
}

interface Helloer extends Named {
	// age: number;

	sayHello(tekst: string): void;
}

class Person implements Helloer {
	//name: string;
	constructor(public name: string, public age: number) {}
	sayHello(tekst: string) {
		console.log(tekst, this.name);
	}
}

let person1: Helloer;
let person2: Person;

person1 = {
	name: "Filip",
	sayHello(tekst: string) {
		console.log(tekst, this.name);
	},
};

person1.sayHello("Cao, ja sam");
person2 = new Person("piliF", 27);
person2.sayHello("Cao, ja sam");
console.log(person2.age);
