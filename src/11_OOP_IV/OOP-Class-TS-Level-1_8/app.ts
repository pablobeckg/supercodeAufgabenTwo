import Car from "./car"
import ElectricCar from "./electric-car"
import InstanceChecker from "./instance-checker"


ElectricCar

const newCar = new Car()

const newElectricCar = new ElectricCar()

InstanceChecker.isCar(newCar);
InstanceChecker.isCar(newElectricCar);

console.log(InstanceChecker.isCar(newCar))
console.log(InstanceChecker.isCar(newElectricCar))
console.log(InstanceChecker.isElectricCar(newCar))
console.log(InstanceChecker.isElectricCar(newElectricCar))


