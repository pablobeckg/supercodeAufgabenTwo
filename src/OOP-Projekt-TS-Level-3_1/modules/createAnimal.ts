import Animal from "./Animal";
import Bird from "./Bird";
import Fish from "./Fish";
import Mamal from "./Mamal";
import Reptile from "./Reptile";
import Continent from "./continents_enum";
import EnclosureId from "./enclosure_enum";



function createNewAnimal(array: Animal[]) {
    let newAnimal: Animal;
    const animalType = (document.getElementById('animal-type') as HTMLSelectElement).value;
    const animalName = (document.getElementById('animal-name') as HTMLInputElement).value;
    const yearOfBirth = (document.getElementById('year-of-birth') as HTMLInputElement).value;
    const specialNeeds = (document.getElementById('special-needs') as HTMLInputElement).value;

    switch(animalType) {
        case "Lion":
            newAnimal = new Mamal('🦁', animalName, yearOfBirth, [Continent.Africa], specialNeeds, EnclosureId.SavannahHabitat);
            break;
        case "Elephant":
            newAnimal = new Mamal('🐘', animalName, yearOfBirth, [Continent.Africa, Continent.Asia], specialNeeds, EnclosureId.SavannahHabitat);
            break;
        case "Turtle":
            newAnimal = new Reptile('🐢', animalName, yearOfBirth, [Continent.Africa, Continent.Asia], specialNeeds, EnclosureId.ReptileHouse);
            break;
        case "Snake":
            newAnimal = new Reptile('🐍', animalName, yearOfBirth, [Continent.Africa, Continent.Asia], specialNeeds, EnclosureId.ReptileHouse);
            break;
        case "Parrot":
            newAnimal = new Bird('🦜', animalName, yearOfBirth, [Continent.SouthAmerica, Continent.Australia], specialNeeds, EnclosureId.JungleHabitat);
            break;
        case "Eagle":
            newAnimal = new Bird('🦅', animalName, yearOfBirth, [Continent.NorthAmerica], specialNeeds, EnclosureId.JungleHabitat);
            break;
        case "Fish":
            newAnimal = new Fish('🐟', animalName, yearOfBirth, [Continent.Australia, Continent.Europe], specialNeeds, EnclosureId.AquaticHabitat);
            break;
        case "Shark":
            newAnimal = new Fish('🦈', animalName, yearOfBirth, [Continent.SouthAmerica, Continent.Australia], specialNeeds, EnclosureId.AquaticHabitat);
            break;
        default:
            throw new Error("Unknown animal type");
    }
    array.push(newAnimal);
}


export default createNewAnimal;
