import IAnimal from "../ contracts/IAnimal";
import Continent from "./continents_enum";
import EnclosureId from "./enclosure_enum";

class Animal implements IAnimal{
    constructor(
        public emoji: string,
        public name: string,
        public yearOfBirth: string,
        public continents: Continent[],
        public specialNeeds: string,
        public enclosureId: EnclosureId,
    ) {}

    currentAge(): number {
        const age = new Date().getFullYear();
        return age - Number(this.yearOfBirth);
    }
}

export default Animal