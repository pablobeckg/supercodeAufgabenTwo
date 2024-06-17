const newBodyElement = document.querySelector('body') as HTMLBodyElement;

type lista = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

fetch('https://picsum.photos/v2/list')
.then((response: Response) => {
  if (!response.ok) {
    console.log('Broken Link')
  }
  return response.json()
})
.then((list: lista[] ) => {
  const newDiv = document.createElement('div');
  newBodyElement.appendChild(newDiv);
  list.forEach(object => {
    const newFigure = document.createElement('figure');
    newDiv.appendChild(newFigure);
    const newImage = document.createElement('img');
    newImage.setAttribute('class', 'figure-wrapp')
    newImage.setAttribute('src', `${object.download_url}`);
    newFigure.appendChild(newImage);
    const newFigcaption = document.createElement('figcaption');
    newFigcaption.innerText = `${object.author}`
    newFigure.appendChild(newFigcaption)
  });
})
.catch((error: Error) => {
  console.log(error)
})
.finally(() => {
    console.log(':D')
})