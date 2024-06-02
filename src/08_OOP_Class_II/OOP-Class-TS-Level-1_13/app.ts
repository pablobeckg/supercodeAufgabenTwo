import Car from "./models/Car";
import CarType from "./models/CarType";
import Driver from "./models/Driver";

const mercedez = new Car("Mercedez", 1992, 180, CarType.Sedan);
const driver1 = new Driver("Pablo", "Beck", 23, mercedez, 1920);

console.log(driver1);
console.log(mercedez.getSpeedInfo());
driver1.getCarType();

const audi = new Car("Audi", 1994, 160, CarType.Coupe);
const driver2 = new Driver("Jorge", "Rublos", 47, audi, 2023);

console.log(driver2);
console.log(audi.getSpeedInfo());
driver2.getCarType();

const toyota = new Car("Toyota", 2003, 130, CarType.Hatchback);
const driver3 = new Driver("Luis", "Maleano", 14, toyota, 2020);

console.log(driver3);
console.log(toyota.getSpeedInfo());
driver3.getCarType();

const pontiac = new Car("Pontiac", 1978, 120, CarType.SUV);
const driver4 = new Driver("Manuel", "Perez", 23, pontiac, 1999);

console.log(driver4);
console.log(pontiac.getSpeedInfo());
driver4.getCarType();
