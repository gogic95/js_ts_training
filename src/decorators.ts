function Logger(logString: string) {
	console.log("Logger factory");

	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	console.log("Template factory");
	return function <T extends { new (...args: any[]): { name: string } }>(
		originalConstructor: T
	) {
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super();
				console.log("Rendering template");
				const hookEl = document.getElementById(hookId);
				if (hookEl) {
					hookEl.innerHTML = template + this.name;
				}
			}
		};
	};
}

@Logger("LOGING PERSON")
@WithTemplate("Dekorisao: ", "btnUpisi")
class Person1 {
	name = "Filip";

	constructor() {
		console.log("Objekat Person1 je kreiran..");
	}
}

const pers = new Person1();
console.log(pers);

function Log(target: any, propertyName: string) {
	console.log("Property decorator");
	console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log("Accessor decorator");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log("Method decorator");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}
function Log4(target: any, name: string, position: number) {
	console.log("Parameter decorator");
	console.log(target);
	console.log(name);
	console.log(position);
}

class Product {
	@Log
	title: string;
	private price: number;
	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}

	@Log2
	set setPrice(value: number) {
		if (value > 0) {
			this.price = value;
		} else {
			throw new Error("Invalid price");
		}
	}

	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this.price * (1 + tax);
	}
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	const adjustedDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		},
	};
	return adjustedDescriptor;
}

class Printer {
	message = "Ovo radi!";
	@Autobind
	showMessage() {
		console.log(this.message);
	}
}

const printer = new Printer();

const button = document.querySelector("button")!;
// button.addEventListener("click", printer.showMessage.bind(printer));  //bez dekoratora
button.addEventListener("click", printer.showMessage); //sa dekoratorom za show message

interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[];
	};
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: ["required"],
	};
}
function PositiveNumber(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: ["positive"],
	};
}

function validate(obj: any) {
	const objectValidatorConfig = registeredValidators[obj.constructor.name];
	if (!objectValidatorConfig) {
		return true;
	}

	let isValid = true;
	for (const prop in objectValidatorConfig) {
		for (const validator of objectValidatorConfig[prop]) {
			switch (validator) {
				case "required":
					isValid = isValid && !!obj[prop];
					break;
				case "positive":
					isValid = isValid && obj[prop] > 0;
					break;
			}
		}
	}
	return isValid;
}

class Course {
	@Required
	title: string;

	@PositiveNumber
	price: number;

	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}
}

button.addEventListener("click", () => {
	const userInputEl = document.getElementById("txtGodine") as HTMLInputElement;
	const userInputPriceEl = document.getElementById(
		"txtCena"
	) as HTMLInputElement;

	const userInput = userInputEl.value;
	const userInputPrice = +userInputPriceEl.value;
	const createdCourse = new Course(userInput, userInputPrice);
	if (!validate(createdCourse)) {
		alert("Invalid input, please try again!");
		return;
	}
	console.log(createdCourse);
});
