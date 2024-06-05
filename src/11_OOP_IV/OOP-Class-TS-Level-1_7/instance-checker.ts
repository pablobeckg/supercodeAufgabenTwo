import Unicorn from "./unicorn";

class InstanceChecker {
    static isUnicorn(objectToCheck: any) {
        if(objectToCheck instanceof Unicorn) {
            return true;
        } else {
            return false;
        }
    }
}

export default InstanceChecker