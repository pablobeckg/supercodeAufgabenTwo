const randomButton = document.getElementById('randomButton') as HTMLButtonElement;
const headlineElement = document.getElementById("headline") as HTMLHeadingElement;

function randomNumber() {
    const random = Math.floor(Math.random() * 4).toString()
    return random
}
function randomText() {
    const texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];
    const randomText = texts[Math.floor(Math.random() * texts.length)]
    return randomText;
}

function randomBoolean(): string {
    const randomBoolean = (Math.random() < 0.5).toString();
    return randomBoolean;
}

function randomEmoji(): string {
    const emojis = ["😊", "🎉", "🚀", "💡", "👍"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    return randomEmoji
}

function updateHeadline(Rückgabewert: string) {
    headlineElement.textContent = Rückgabewert
}

const functions = [randomNumber(), randomText(), randomBoolean(), randomEmoji()]

randomButton.addEventListener('click', () => {
    updateHeadline(functions[Math.floor(Math.random() * 4)])
})
