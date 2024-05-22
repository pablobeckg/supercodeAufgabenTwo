const h1Element = document.querySelector('h1');
const buttons = document.querySelectorAll('button');

function smallButton() {
    buttons[0].addEventListener('click', (event: Event) => {
        event.preventDefault();
        if(h1Element) {
            h1Element.style.border = '2px solid gray';
            h1Element.style.color = 'green';
            h1Element.style.borderRadius = '10px';
            h1Element.style.textAlign = 'center';
        }
    })
};

function middleButton() {
    buttons[1].addEventListener('click', (event: Event) => {
        event.preventDefault();
        if(h1Element) {
            h1Element.style.border = '6px solid gray';
            h1Element.style.borderRadius = '10px';
            h1Element.style.transition = 'color 1s linear'
        }
    })
};

function bigAndCrazy() {
    buttons[2].addEventListener('click', (event: Event) => {
        event.preventDefault();
        if(h1Element) {
            h1Element.style.border = '10px solid green';
            h1Element.style.color = 'yellow';
        }
    })
};

smallButton();
middleButton();
bigAndCrazy();