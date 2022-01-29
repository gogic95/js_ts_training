type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee10: ElevatedEmployee = {
	name: "Filip",
	privileges: ["All"],
	startDate: new Date(),
};

// console.log(employee10);

type Combinable1 = string | number;
type Numeric = number | boolean;
type Universal = Combinable1 & Numeric; //ISPADA DA JE SAMO NUMBER JER U OVOM SLUCAJU RADI PRESEK DVE UNIJE, DOK KOD OBJEKATA KOMBINUJE SVE

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: number, b: string): string;
function add2(a: string, b: number): string;
function add2(a: Combinable1, b: Combinable1) {
	if (typeof a === "string" || typeof b === "string") {
		//Ovo je type guard
		return a.toString() + b.toString();
	}
	return a + b;
}

const result = add2("Fil", "ip");
result.split(" ");

const fetchedUserData = {
	id: "user1",
	name: "LipFi",
	job: { title: "IT Hero", description: "Sam svoj gazda" },
};

console.log(fetchedUserData?.job?.title);

const userIn = null;
console.log(userIn ?? 100); // NULLISH COALESCING

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
	console.log("Name " + emp.name);

	if ("privileges" in emp) {
		console.log("Privileges: " + emp.privileges);
	}

	if ("startDate" in emp) {
		console.log("Start date: " + emp.startDate);
	}
}

printEmployeeInfo(employee10);
// printEmployeeInfo({ name: "Privilegovani", privileges: ["Privilegije"] });
// printEmployeeInfo({ name: "Pocetno Datumski", startDate: new Date() });

class Car {
	drive() {
		console.log("Driving...");
	}
}

class Truck {
	drive() {
		console.log("Driving a TRUCK...");
	}
	loading(roba: number) {
		console.log("Ukrcavam robu: " + roba);
	}
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	if (vehicle instanceof Truck) {
		vehicle.loading(399);
	} else {
		vehicle.drive();
	}
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
	type: "bird";
	flyingSpeed: number;
}

interface Horse {
	type: "horse";
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed;
	switch (animal.type) {
		case "bird":
			speed = animal.flyingSpeed;
			break;
		case "horse":
			speed = animal.runningSpeed;
			break;
		default:
			return;
	}

	console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 15 });
moveAnimal({ type: "horse", runningSpeed: 23 });

//const userInputElement = <HTMLInputElement> document.getElementById('txtGodine'); //ovo ne moze kad se koristi sa React-om

// const userInputElement = document.getElementById('txtGodine') as HTMLInputElement;
// userInputElement.value = 'Hi there!';

const userInputElement = document.getElementById("txtGodine");
if (userInputElement) {
	(userInputElement as HTMLInputElement).value = "Hi there!"; //treci nacin
}

interface ErrorContainter {
	[key: string]: string;
}

const errorBag: ErrorContainter = {
	email: "Not a valid email!",
	username: "Must start with a capital letter!",
};
