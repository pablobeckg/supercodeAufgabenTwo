import Car from "./Car";

class Driver {
    firsName: string;
    lastName: string;
    age: number;
    car: Car
    constructor(firsName: string, lastName: string, age: number, car: Car ) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.age = age;
        this.car = car;
    }
}

export default Driver;