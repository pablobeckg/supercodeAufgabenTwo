export function sayHello(name: string, callback: (message: string) => void) {
    
    callback(`${name} says hellow`)
}

function greetingCallback(message: string) {
    console.log(message)
}

sayHello('Pablo', greetingCallback);
sayHello('Manuel', greetingCallback);
sayHello('Maria', greetingCallback);
