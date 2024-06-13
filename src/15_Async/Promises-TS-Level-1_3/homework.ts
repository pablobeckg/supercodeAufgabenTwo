const promiseOne = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Exercise 1 done");
    }, 1000);
});

const promiseTwo = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Exercise 2 done");
    }, 2000);
});

const promiseThree = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Exercise 3 done");
    }, 3000);
});

const updateParagraph = (text: string) => {
    const paragraph = document.querySelector('p');
    if (paragraph) {
        paragraph.textContent += " " + text;
    }
};

promiseOne.then((message) => {
    updateParagraph(message);
    return message;
})

promiseTwo.then((message) => {
    updateParagraph(message);
    return message;
})

promiseThree.then((message) => {
    updateParagraph(message);
    return message;
})
