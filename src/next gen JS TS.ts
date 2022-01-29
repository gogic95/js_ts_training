const user = "filip";
let age = 17;
age = 27;

function addNum(a: number, b: number) {
	let result;
	result = a + b;
	return result;
}

// console.log(result)
// console.log(addNum(5, 4));

// const addConst = (a: number, b: number = 4, c: number = 3) => a + b + c; //default argument for b and c

// console.log(addConst(9));
// const printArrow = (output: string) => console.log(output);

// const button = document.querySelector("button");
// if (button) {
// 	button.addEventListener("click", (event) => console.log("Kliknuto", event));
// }

// printArrow("idem0325mr9");

const hobiji = ["Programiranje", "Sport", "Hrana"];
const sviHobiji = ["Pecanje"];
sviHobiji.push(...hobiji);
console.log(...sviHobiji); //spread

const osoba1 = {
	ime: "Filip",
	godine: 27,
};

const kopiranaOsoba = { ...osoba1 };
const kopiranaOsoba2 = kopiranaOsoba;
kopiranaOsoba2.godine = 26;
console.log(kopiranaOsoba);

const addConst = (...input: number[]) => {
	// let suma = 0;
	// input.forEach((element) => {
	// 	suma += element;
	// });
	// return suma;
	return input.reduce((curRes, curVal) => {
		return curRes + curVal;
	}, 0);
};

console.log(addConst(1));
console.log(addConst(1, 3, 5));
console.log(addConst(1, 5, 8, 9, 2.3));

type zaReduce = number | string;

const spajanjeZaReduce = (total: (number), value: (number)) => {
	return total + value;
};

const dodavanje = (...ulaz: number[]) => {
	return ulaz.reduce(spajanjeZaReduce);
};

// console.log(dodavanje('help'));
console.log(dodavanje(5 , 8 , 3.3));

const [hobi1, hobi2, ...ostatakHobija] = sviHobiji;

console.log(hobi1, hobi2, ostatakHobija);

let {ime: imeOs1, godine} = osoba1;
console.log(`Ime: ${imeOs1}, godine: ${godine}`);
