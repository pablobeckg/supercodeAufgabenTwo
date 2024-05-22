const exampleElements = document.getElementsByClassName('example') as HTMLCollectionOf<HTMLElement>;
const selectButton = document.querySelector('button');

selectButton?.addEventListener('click', () => {
    changeColor();
})


function changeColor() {
    const colors = ['red', 'blue', 'yellow', 'pink', 'purple', 'cyan'];
    const randomColor = Math.floor(Math.random()*colors.length)
    for(let i = 0; i < exampleElements.length; i++) {
        exampleElements[i].style.backgroundColor = colors[randomColor];
    }
}