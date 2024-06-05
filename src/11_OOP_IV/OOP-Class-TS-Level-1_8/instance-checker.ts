import Car from "./car";

class InstanceChecker {
    // static isUnicorn(objectToCheck: any) {
    //     if(objectToCheck instanceof Unicorn) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    static isCar(objectToCheck: any) {
        if(objectToCheck instanceof Car) {
            return true;
        } else {
            return false;
        }
    }
    static isElectricCar(objectToCheck: any) {
        if(objectToCheck instanceof Car) {
            return true;
        } else {
            return false;
        }
    }
}

export default InstanceChecker