const elementInputTextSelected = document.querySelector('input[type="text"]') as HTMLInputElement;
const elementInputButtonSelected = document.querySelector('input[type="button"]') as HTMLInputElement;
const elementDivSelected = document.querySelector('div');
const date = new Date();
function renderDate() {
    elementInputButtonSelected.addEventListener('click', () => {
        const createDate = document.createElement('h2');
         elementDivSelected?.appendChild(createDate);
        createDate.innerText = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}: ${elementInputTextSelected.value}`;
    })
}

renderDate()