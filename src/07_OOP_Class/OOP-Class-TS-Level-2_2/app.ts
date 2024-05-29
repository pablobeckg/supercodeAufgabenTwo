import Car from "./models/Car";
import Driver from "./models/Driver";

const mercedez = new Car('Mercedez', 1992, 200);
const driver1 = new Driver('Pablo', 'Beck', 23, mercedez)

console.log(driver1)

const audi = new Car('Audi', 1994, 160);
const driver2 = new Driver('Jorge', 'Rublos', 47, audi)

console.log(driver2)

const toyota = new Car('Toyota', 2003, 130);
const driver3 = new Driver('Luis', 'Maleano', 14, toyota)

console.log(driver3)


const pontiac = new Car('Pontiac', 1978, 120);
const driver4 = new Driver('Manuel', 'Perez', 23, pontiac)

console.log(driver4)