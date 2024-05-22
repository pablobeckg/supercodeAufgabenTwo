const elementMyListSelected = document.querySelector('#myList');
const elementInputTextSelect = document.querySelector('#inputText') as HTMLInputElement;
const elementInputButtonSelect = document.querySelector('button') as HTMLButtonElement;


    elementInputButtonSelect.addEventListener('click', (event: Event) => {
        event.preventDefault();
        const userInput = elementInputTextSelect.value.trim(); // Leerzeichen am Anfang und Ende entfernen
        if (userInput !== '') { // Überprüfen, ob die Eingabe nicht leer ist
            const createItem = document.createElement('li');
            createItem.innerText = userInput;
            elementMyListSelected?.appendChild(createItem);
        }
    });



