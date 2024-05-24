const body = document.querySelector('body');

// function sayHallo(): void {
//     const newheading = document.createElement('h1');
//     newheading.textContent = 'Hallo';
//     body?.appendChild(newheading);
// }

// sayHallo()

// function summe(a: number, b:number): void {
//     console.log(a + b);
// }

// summe(10, 5);

// function multi(a: number, b:number): void {
//     window.alert(a * b);
// }

// multi(2, 5)

type objeto = {name: string; lastname: string}

const object: objeto = {
    name: 'Pablo',
    lastname: 'Beck'
}

// function withObject (obj: objeto) {
//     console.log(`${obj.name} ${obj.lastname}`);
// }

// withObject(object);

const sayHalloArrow = (): void => {
    const newheading = document.createElement('h1');
    newheading.textContent = 'Hallo';
    body?.appendChild(newheading);
}

sayHalloArrow();

const summeArrow = (a: number, b:number): void => console.log(a + b);

summeArrow(4, 5);

const multiArrow = (a: number, b:number): void => window.alert(a * b);

multiArrow(4, 5);



const withObjectArrow = (obj: objeto) => console.log(`${obj.name} ${obj.lastname}`);

withObjectArrow(object);