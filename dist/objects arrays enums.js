"use strict";
// const osoba: {
//     ime: string;
//     prezime: string;
//     godiste: number;
//     hobi: string[];
//     uloga: [number, string];
// } = {
//     ime: "Filip",
//     prezime: "Gogic",
//     godiste: 1995,
//     hobi: ['Sport', 'Programiranje'],
//     uloga: [1, 'Glavni programer']
// };
var Pozicija;
(function (Pozicija) {
    Pozicija[Pozicija["Glavni_programer"] = 0] = "Glavni_programer";
    Pozicija[Pozicija["Admin"] = 1] = "Admin";
    Pozicija[Pozicija["DevOps"] = 2] = "DevOps";
})(Pozicija || (Pozicija = {}));
const osoba = {
    ime: "Filip",
    prezime: "Gogic",
    godiste: 1995,
    hobi: ["Sport", "Programiranje"],
    uloga: Pozicija.Admin,
};
//osoba.uloga.push('admin'); //push moze iako je tuple, to je exception u typescript-u
if (osoba.uloga === Pozicija.Admin) {
    console.log("jeste admin");
}
let omiljenaAktivnost;
omiljenaAktivnost = ["Sport"];
for (const hobby of osoba.hobi) {
    console.log(hobby.toUpperCase());
}
// console.log(osoba);
// console.log("Ime je: "+ osoba.ime);
// console.log("Prezime je: "+ osoba.prezime);
// console.log("Godiste: "+ osoba.godiste);
