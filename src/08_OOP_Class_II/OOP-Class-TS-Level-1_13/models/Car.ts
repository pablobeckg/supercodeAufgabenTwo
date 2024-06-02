import CarType from "./CarType";

class Car {
    brand: string;
    private _constructionYear: number;
    currentSpeed: number;
    carType: CarType;

    constructor(brand: string, constructionYear: number, currentSpeed: number, carType: CarType) {
        this.brand = brand;
        this._constructionYear = constructionYear;
        this.currentSpeed = currentSpeed;
        this.carType = carType;
    }
    get constructionYear() {
        return this._constructionYear
    }
    getSpeedInfo(): string {
        switch (true) {
            case (this.currentSpeed <= 40):
                return 'Driving slowly';
            case (this.currentSpeed > 40 && this.currentSpeed <= 70):
                return 'Driving normally';
            case (this.currentSpeed > 70 && this.currentSpeed <= 120):
                return 'Driving fast';
            case (this.currentSpeed > 120 && this.currentSpeed <= 190):
                return 'Driving really fast';
            case (this.currentSpeed > 190):
                return 'WTF';
            default:
                return 'Invalid speed';
        }
    }
}

export default Car;