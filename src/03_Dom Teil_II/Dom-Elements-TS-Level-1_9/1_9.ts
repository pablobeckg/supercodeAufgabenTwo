const selectElement = document.getElementById('farbeAuswahlen') as HTMLSelectElement;
const formElement = document.querySelector('form');

formElement?.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const selectedItemToRemove = selectedIndex();
    remove(selectedItemToRemove);
});

function selectedIndex() {
 const selectedIndexElement = selectElement.value;
 return selectedIndexElement;
}

function remove(selectedItemToRemove: string) {
    selectElement.remove(Number(selectedItemToRemove));
}

