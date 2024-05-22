document.addEventListener('keydown', (event: KeyboardEvent) => {
    const keyElement = document.getElementById('key')!;
    const keyCodeElement = document.getElementById('keyCode')!;
    const codeElement = document.getElementById('code')!;
    
    keyElement.textContent = `Key: ${event.key}`;
    keyCodeElement.textContent = `KeyCode: ${event.keyCode}`;
    codeElement.textContent = `Code: ${event.code}`;
});
