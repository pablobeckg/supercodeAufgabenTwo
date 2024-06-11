const zeit = document.querySelector('.zeit') as HTMLDivElement;
const btn = document.getElementById('btn') as HTMLButtonElement;

btn.addEventListener('click', () => {
    let counter = 101;
    
    const intervalId = setInterval(() => {
        counter--;
        if (counter >= 0) {
            zeit.innerText = `${counter} %`;
        } else {
            clearInterval(intervalId);
        }
    }, 100);
})

