import Car from "./Car";

class Driver {
    firsName: string;
    lastName: string;
    age: number;
    car: Car
    private _licenseFromYear: number;

    get licenseFromYear() {
        return this._licenseFromYear
    }

    constructor(firsName: string, lastName: string, age: number, car: Car, licenseFromYear: number) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.age = age;
        this.car = car;
        this._licenseFromYear = licenseFromYear;
    }

    getCarType() {
        console.log(`${this.car.carType}`)
    }
}

export default Driver;