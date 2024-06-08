const selectAnimal = document.getElementById('animal-type') as HTMLSelectElement;

function createAnimalTypeOption(emoji: string, name: string) {
    const newAnimalOption = document.createElement('option');
    newAnimalOption.setAttribute('value', name)
    newAnimalOption.innerText = `${emoji} ${name}`
    selectAnimal.appendChild(newAnimalOption)
}

export default createAnimalTypeOption;