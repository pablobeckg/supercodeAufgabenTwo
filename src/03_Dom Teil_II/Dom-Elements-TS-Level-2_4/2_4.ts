const bodyElement = document.querySelector('body');
const selectElemente = document.getElementById('farbeAuswahlen') as HTMLSelectElement;
const buttonElement = document.getElementById('button');

buttonElement?.addEventListener('click', (event: Event) => {
    event.preventDefault();
    const colorValue = selectElemente.value
    if(bodyElement) {
        bodyElement.style.backgroundColor = colorValue;
        console.log(colorValue);
    }
})