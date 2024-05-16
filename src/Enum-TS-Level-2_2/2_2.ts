enum ClothingColor {
    Gelb = '#ffff00',
    Orange = '#FFA500',
    Pink = '#ffc0cb',
    Blau = '#0000FF',
    Lila = '#800080',
    Grau = '#808080',
}

const allColors: ClothingColor[] = Object.values(ClothingColor);



function createButtons(colors: ClothingColor[]) {
    const selectBody = document.querySelector('body');
    const bttnContainer = document.createElement('div');

    if(selectBody) {
        selectBody.appendChild(bttnContainer);
        colors.forEach(color => {
            const button = document.createElement('button');
            button.style.backgroundColor = color;
            button.textContent = color;
            bttnContainer.appendChild(button);
            button.addEventListener('click', () => {
                selectBody.style.backgroundColor = color;
            });
        });
    }
}

createButtons(allColors);

console.log(allColors)

