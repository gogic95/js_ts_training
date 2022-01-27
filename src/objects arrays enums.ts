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

enum Pozicija {Glavni_programer, Admin, DevOps};

const osoba = {
    ime: "Filip",
    prezime: "Gogic",
    godiste: 1995,
    hobi: ['Sport', 'Programiranje'],
    uloga: Pozicija.Admin

};

//osoba.uloga.push('admin'); //push moze iako je tuple, to je exception u typescript-u

if (osoba.uloga === Pozicija.Admin){
    console.log("jeste admin");
}

let omiljenaAktivnost: string[];
omiljenaAktivnost = ['Sport'];

for (const hobby of osoba.hobi) {
    console.log(hobby.toUpperCase());
}

// console.log(osoba);
// console.log("Ime je: "+ osoba.ime);
// console.log("Prezime je: "+ osoba.prezime);
// console.log("Godiste: "+ osoba.godiste);
