const textInput = document.getElementById('text-input') as HTMLInputElement;
const capitalLettersButton = document.getElementById('capital-letters-button');
const spaceButton = document.getElementById('space-button');
const vocalsButton = document.getElementById('vocals-button');
const outputDiv = document.getElementById('output-div') as HTMLDivElement;

capitalLettersButton?.addEventListener('click', () => {
    outputText(countCapitalLetters().toString())
})
spaceButton?.addEventListener('click', () => {
    outputText(countSpaces().toString())
})

vocalsButton?.addEventListener('click', () => {
    outputText(countVocals().toString())
})

function universalCount(parameter: RegExp) {
    let typedText = textInput.value;
    const regex = parameter;
    const matches = typedText.match(regex);
    return matches ? matches.length : 0;
}

function countCapitalLetters(): number {
    return universalCount(/[A-Z]/g);
}

function countSpaces(): number  {
    return universalCount(/\s/g);
}

function countVocals(): number  {
    return universalCount(/[aeiou]/gi);
}

function outputText(parameter: string) {
    if (outputDiv) {
        outputDiv.innerText = parameter;
    }
}