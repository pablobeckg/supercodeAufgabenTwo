const elementInfoSelected = document.getElementById('info');
const elementContainerSelected = document.getElementById('container');

function createNewText() {
   const createH1 = document.createElement('h1');
   const createH2 = document.createElement('h2');
   const createP = document.createElement('p');
   const createInput = document.createElement('input');
   createH1.innerText = 'Hello World';
   createH2.innerText = 'How are you?'
   createP.innerText = 'This is a parragraph'
   createInput.setAttribute('type', 'text')
   elementInfoSelected?.appendChild(createH1);
   elementInfoSelected?.appendChild(createH2);
   elementContainerSelected?.appendChild(createP);
   elementContainerSelected?.appendChild(createInput)
}

createNewText();