import EnclosureId from "./enclosure_enum";

class Enclosure {
    constructor(
        public id: string,
        public name: string,
        public builtInYear: number) {
            
        }

    static createNewEnclosure(array: Enclosure[], number: number, name: string, builtInYear: number) {
        let newEnclosure: Enclosure = new Enclosure(EnclosureId[number], name, builtInYear);
        array.push(newEnclosure)
        // console.log(array)
        
    }
}

export default Enclosure;



