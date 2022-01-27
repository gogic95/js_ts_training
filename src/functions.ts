function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResults(num: number) {
	console.log("Result is: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (res: number) => void) {
	const result = n1 + n2;
	cb(result);
}

printResults(add(3, 7));

//let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;

printResults(combineValues(3, 459));

addAndHandle(3, 2, printResults);
addAndHandle(3, 5, (result) => {
	console.log(result);
});
