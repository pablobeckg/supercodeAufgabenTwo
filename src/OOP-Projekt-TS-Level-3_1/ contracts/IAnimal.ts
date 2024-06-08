
import Continent from "../modules/continents_enum";
import EnclosureId from "../modules/enclosure_enum";

interface IAnimal {
    emoji: string;
    name: string;
    yearOfBirth: string;
    continents: Continent[];
    specialNeeds: string;
    enclosureId: EnclosureId;
}

export default IAnimal;