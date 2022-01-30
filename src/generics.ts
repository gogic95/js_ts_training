// const names: Array<string> = [];
// // names[0].split(' ');

function genericTest<T>(input: T) {
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

function merge<T extends object, K extends object>(objA: T, objB: K) {
	//sa constraints
	return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string }, { age: number }>(
	{ name: "Filip" },
	{ age: 34 }
);
const mergedObj2 = merge(
	{ name: "Filip", hobbies: ["Progr", "Digital marketing"] },
	{ age: 34 }
);
console.log(mergedObj.age);
console.log(mergedObj2.hobbies);

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = "Has no value..";

	if (element.length === 1) {
		descriptionText = "Got 1 element.";
	} else if (element.length > 1) {
		descriptionText = "Got " + element.length + " elements.";
	}
	return [element, descriptionText];
}

console.log(countAndDescribe("Cao brate!"));
console.log(countAndDescribe(["Kola", "Stan"]));
console.log(countAndDescribe([]));

function extractAndConvert<T extends object, K extends keyof T>(
	obj: T,
	key: K
) {
	return obj[key];
}

extractAndConvert({ name: "Filip" }, "name");

class Skladiste<T extends string | number | boolean> {
	private data: T[] = [];

	// constructor(public item: T) {}

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1); //ako ne nadje element brise poslednji iz niza
	}

	getItems() {
		return [...this.data];
	}
}

const tekstSkladiste = new Skladiste<string>();
tekstSkladiste.addItem("aaa");
tekstSkladiste.addItem("bbb");
tekstSkladiste.addItem("ccc");
tekstSkladiste.removeItem("bbb");
console.log(tekstSkladiste.getItems());

const numberSkladiste = new Skladiste<number>();
numberSkladiste.addItem(5);

// const objSkladiste = new Skladiste<object>();  //sada ne moze <object> jer sam dodao constraints na generics T samo za primitivne tipove
// const filipObj = { ime: "Filip" };
// objSkladiste.addItem(filipObj);
// objSkladiste.addItem({ ime: "LipFi" });
// objSkladiste.removeItem(filipObj);
// console.log(objSkladiste.getItems());

interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(
	title: string,
	description: string,
	date: Date
): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;
	return courseGoal as CourseGoal;
}

const imena: Readonly<string[]> = ['Filip', 'piliF'];
// imena.push('Ffiillliiippp');         ne moze jer sam stavio da bude readonly
// imena.pop();