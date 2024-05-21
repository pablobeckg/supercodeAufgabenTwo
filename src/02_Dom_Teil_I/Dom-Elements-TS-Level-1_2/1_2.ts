const exampleElements = document.getElementsByClassName('example') as HTMLCollectionOf<HTMLElement>;
const selectButton = document.querySelector('button');

selectButton?.addEventListener('click', () => {
    changeColor();
})


function changeColor() {
    for(let i = 0; i < exampleElements.length; i++) {
        exampleElements[i].style.backgroundColor = 'red';
    }
}