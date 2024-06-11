const message = document.querySelector('.message') as HTMLDivElement;
const text = document.querySelector('p') as HTMLParagraphElement;
const count = document.getElementById('count') as HTMLDivElement;

let counter2 = 10;

const interval2 = setInterval(() => {
    if (counter2 > 0) {
        counter2--
        count.textContent = String(counter2)
        console.log(counter2)
    } else {
        message.style.opacity = '0'
        clearInterval(interval2)
    }
},1000)
