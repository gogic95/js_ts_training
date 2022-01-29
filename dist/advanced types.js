"use strict";
const employee10 = {
    name: "Filip",
    privileges: ["All"],
    startDate: new Date(),
};
function add2(a, b) {
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
function printEmployeeInfo(emp) {
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
    loading(roba) {
        console.log("Ukrcavam robu: " + roba);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loading(399);
    }
    else {
        vehicle.drive();
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
    userInputElement.value = "Hi there!"; //treci nacin
}
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital letter!",
};
