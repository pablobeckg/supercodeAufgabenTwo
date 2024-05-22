type SimplePerson = {vorname: string; nachname: string; land: string};

const formElemente = document.getElementById('form1');
const vornameElement = document.getElementById('vorname') as HTMLInputElement;
const nachnameElement = document.getElementById('nachname') as HTMLInputElement;
const landElement = document.getElementById('land') as HTMLSelectElement;

formElemente?.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const newPerson = {vorname: vornameElement.value, nachname: nachnameElement.value, land: landElement.value};
    console.log(newPerson);
})
