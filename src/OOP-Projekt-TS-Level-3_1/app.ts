import Animal from "./modules/Animal";
import Enclosure from "./modules/Enclosure";
import createNewAnimal from "./modules/createAnimal";

import createAnimalTypeOption from "./modules/createAnimalTypeOption";
import EnclosureId from "./modules/enclosure_enum";

const enclosureList = document.getElementById('enclosure-list');

const enclosureArray: Enclosure[] = [];
let allAnimals: Animal[] = [];

createAnimalTypeOption('🦁', 'Lion');
createAnimalTypeOption('🐘', 'Elephant');
createAnimalTypeOption('🐢', 'Turtle');
createAnimalTypeOption('🐍', 'Snake');
createAnimalTypeOption('🦜', 'Parrot');
createAnimalTypeOption('🦅', 'Eagle');
createAnimalTypeOption('🐠', 'Fish');
createAnimalTypeOption('🦈', 'Shark');

let number = 0;
while (number <= 3) {
    Enclosure.createNewEnclosure(enclosureArray, number, EnclosureId[number], Math.floor(Math.random()* 50) + 1974);
    number++
}

enclosureArray.forEach(enclosure => {
    const newEnclosureList = document.createElement('ul') as HTMLUListElement;
    const enclosureListId = `enclosure-list-${enclosure.id}`;
    newEnclosureList.id = enclosureListId;
    newEnclosureList.textContent = enclosure.name;
    enclosureList?.appendChild(newEnclosureList);
});

document.getElementById('animal-form')?.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    allAnimals = []
    createNewAnimal(allAnimals)

    allAnimals.forEach(animal => {
        if (animal.enclosureId == EnclosureId.SavannahHabitat) {
            const newEnclosureListItem = document.createElement('li');
            newEnclosureListItem.textContent = `${animal.emoji} ${animal.name}`
            const SavannahHabitat = document.getElementById('enclosure-list-SavannahHabitat')
            SavannahHabitat?.appendChild(newEnclosureListItem);
        } else if(animal.enclosureId == EnclosureId.AquaticHabitat) {
            const newEnclosureListItem = document.createElement('li');
            newEnclosureListItem.textContent = `${animal.emoji} ${animal.name}`
            const AquaticHabitat = document.getElementById('enclosure-list-AquaticHabitat')
            AquaticHabitat?.appendChild(newEnclosureListItem);
        } else if(animal.enclosureId == EnclosureId.JungleHabitat) {
            const newEnclosureListItem = document.createElement('li');
            newEnclosureListItem.textContent = `${animal.emoji} ${animal.name}`
            const JungleHabitat = document.getElementById('enclosure-list-JungleHabitat')
            JungleHabitat?.appendChild(newEnclosureListItem);
        } else if(animal.enclosureId == EnclosureId.ReptileHouse) {
            const newEnclosureListItem = document.createElement('li');
            newEnclosureListItem.textContent = `${animal.emoji} ${animal.name}`
            const ReptileHouse = document.getElementById('enclosure-list-ReptileHouse')
            ReptileHouse?.appendChild(newEnclosureListItem);
        }
        const dataOutput = document.getElementById('data-output') as HTMLDivElement;
        dataOutput.textContent = `${animal.name} is ${animal.currentAge()} years old and needs ${animal.specialNeeds} and lives in the ${EnclosureId[animal.enclosureId]}`
    });
})







