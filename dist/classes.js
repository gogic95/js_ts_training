"use strict";
class Sektor {
    constructor(naziv, sifraOdeljenja) {
        this.naziv = naziv;
        this.sifraOdeljenja = sifraOdeljenja;
        // private naziv: string;
        // sifraOdeljenja: number;
        // private employees: string[] = []; //dodao private, da ne moze direktno da se pristupi nizu, vec samo preko metode AddEmployee
        this.employees = []; //da mogu da pristupe sve klase koje nasledjuju
        // this.naziv = naziv;
        // this.sifraOdeljenja = sifraOdeljenja;
        //nema potrebe i gore i dole da definisem, kad mogu ovako u konstruktoru sve da resim
        //kad je read only ne mogu da menjam nakon inicijalizacije
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe(opis) {
        console.log(opis, this.naziv, this.sifraOdeljenja);
    }
    // describe( this: Sektor, opis: string) {
    //     console.log(opis, this.naziv);
    // }        !!! Da moze da koristi samo instanca klase Sektor(tj. da ima odgovarajuci argument), dodajem this: Sektor
    addEmployee(nameOfEmp) {
        this.employees.push(nameOfEmp);
    }
    printEmployees() {
        console.log(`Broj zaposlenih: ${this.employees.length}
Zaposleni: ${this.employees}`);
    }
}
Sektor.fiscalYear = 2022;
class ITSektor extends Sektor {
    constructor(id, admins) {
        super("IT Sektor", id);
        this.id = id;
        this.admins = admins;
        this.detaljanOpis = () => {
            console.log("Ovo je detaljan opis IT Sektora");
        };
        this.admins.push("Default Admin");
    }
}
class Accounting extends Sektor {
    constructor(id, reports) {
        super("Accounting", id);
        this.id = id;
        this.reports = reports;
        this.detaljanOpis = () => {
            console.log("Ovo je detaljan opis Accountinga");
        };
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (!Accounting.instance) {
            this.instance = new Accounting(4234, []);
        }
        return this.instance;
    }
    get getLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        return "There are no reports yet!";
    }
    set setLastReport(text) {
        this.lastReport = text;
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    showReports() {
        console.log(this.reports);
    }
    addEmployee(nameOfEmp) {
        if (nameOfEmp === "Racunovodja") {
            nameOfEmp = "Accountant";
        }
        // super.addEmployee(nameOfEmp); // ovako ako je private niz employees
        this.employees.push(nameOfEmp); // ovako sada moze posto je protected employees
    }
}
const employee1 = Sektor.createEmployee("piliF");
console.log(employee1.name, Sektor.fiscalYear);
let sektor1 = new ITSektor(432, []);
console.log(sektor1);
let sektor2 = new ITSektor(333, ["Filip Admin", "Filip Admin 2"]);
console.log(sektor2);
let sektor3 = Accounting.getInstance();
let sekt = Accounting.getInstance();
console.log(sektor3);
console.log(sekt);
console.log("Poslednji izvestaj: ", sektor3.getLastReport);
sektor3.setLastReport = "Waiting for reports..";
console.log("Poslednji izvestaj: ", sektor3.getLastReport);
sektor3.addReport("prvi");
console.log("Poslednji izvestaj: ", sektor3.getLastReport);
sektor3.showReports();
sektor3.addEmployee("Racunovodja");
sektor3.printEmployees();
console.log(sektor3);
// console.log(sektor1.naziv, sektor1.sifraOdeljenja);
sektor1.describe("Ovo je opis za:");
// const sektor1Copy = {describe: sektor1.describe};
// sektor1Copy.describe("ovo je opis za:"); // UNDEFINED jer se poziva this.naziv koji nije zadat u sektor1Copy
sektor1.addEmployee("Filip");
sektor1.addEmployee("Filip Car");
// sektor1.employees[2] = "Ana";
sektor1.printEmployees();
sektor1.detaljanOpis();
sektor2.detaljanOpis();
sektor3.detaljanOpis();
