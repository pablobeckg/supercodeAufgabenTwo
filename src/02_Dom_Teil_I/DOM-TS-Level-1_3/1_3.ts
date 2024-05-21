const elementGallerySelected = document.querySelector('#gallery');

function createThreeFigures() {
    for(let i = 1; i < 4; i++) {
        const createP = document.createElement('p');
        createP.innerText = `Fig.${i}`
        const createFigure = document.createElement('figure');
        const createImg = document.createElement('img');
        createImg.setAttribute('src', 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
        createFigure.appendChild(createImg)
        createFigure.appendChild(createP);
        elementGallerySelected?.appendChild(createFigure);

    }
}

createThreeFigures();