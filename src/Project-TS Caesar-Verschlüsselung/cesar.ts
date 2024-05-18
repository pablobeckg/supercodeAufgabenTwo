const getText = document.getElementById('secretText') as HTMLInputElement;
const getInput = document.getElementById('secretNumber') as HTMLInputElement;
const getEncodeBttn = document.getElementById('encoder');
const getDecodeBttn = document.getElementById('decoder');
const getSolution = document.querySelector('h3')

function encode(text:string, num: number) {
    const split = text.toUpperCase().split('');
    console.log(split);
    const newArray: number[]  = [];
    const newArray2: string[] = [];
    
    split.forEach(element => {
        if(element == ' ') {
            newArray.push(element.charCodeAt(0));
        } else {
            newArray.push(element.charCodeAt(0) + num);
        }
    });
    for (let index = 0; index < newArray.length; index++) {
        
        if(newArray[index] > 90) {
            newArray[index] -= 26
        } 
        
    }
    newArray.forEach(element => {
        const toLetter = String.fromCharCode(element)
        newArray2.push(toLetter)
    });
    getText.value = '';
    return newArray2.join('')
}

function decode(text:string, num: number) {
    const split = text.toUpperCase().split('');
    console.log(split);
    const newArray: number[]  = [];
    const newArray2: string[] = [];
    split.forEach(element => {
        if(element == ' ') {
            newArray.push(element.charCodeAt(0));
        } else {
            newArray.push(element.charCodeAt(0) - num);
        }
        
    });
    for (let index = 0; index < newArray.length; index++) {
        
        if(newArray[index] < 65) {
            newArray[index] += 26
        }if (newArray[index] == 58) {
            newArray[index] -= 26
        }
        
    }
    newArray.forEach(element => {
        const toLetter = String.fromCharCode(element)
        newArray2.push(toLetter)
    });
    getText.value = '';
    return newArray2.join('')
}

getEncodeBttn?.addEventListener('click', (event: Event) => {
    event.preventDefault();
    if(getSolution) {
        getSolution.textContent = encode(getText.value, parseInt(getInput.value));
    }
    
})
getDecodeBttn?.addEventListener('click', (event: Event) => {
    event.preventDefault();
    if(getSolution) {
        getSolution.textContent = decode(getText.value, parseInt(getInput.value));
    }
    
})

