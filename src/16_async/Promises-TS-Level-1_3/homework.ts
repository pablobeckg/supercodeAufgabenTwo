export{}

function doHomework(name: string, timeout: number): Promise<string> {
    return new Promise<string>((resolve) => {
       setTimeout(() => {
           resolve(`Exercise ${name}`)
       }, timeout);
    })
}
const homeWorkOne = doHomework('one', 1000);
const homeWorkTwo = doHomework('two', 2000);
const homeWorkThree = doHomework('three', 3000);

const updateParagraph = (text: string) => {
    const paragraph = document.querySelector('p');
    if (paragraph) {
        paragraph.textContent += " " + text;
    }
};

Promise.all([homeWorkOne, homeWorkTwo, homeWorkThree])
  .then((results: string[]) => {
    results.forEach(result => {
        updateParagraph(result);
    }); 
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Alles ist beendet');
  });


