export namespace Fiction {
    const MAX_BOOKS = 10;
    let books: string[] = [];

    export function addBook(name: string): void {
        if (books.length >= MAX_BOOKS) {
            console.error('Fehler: Maximale Anzahl von Büchern in Fiction erreicht.');
        } else {
            books.push(name);
        }
    }

    export function removeBook(name: string): void {
        const index = books.indexOf(name);
        if (index === -1) {
            console.error('Fehler: Buch in Fiction nicht gefunden.');
        } else {
            books.splice(index, 1);
        }
    }

    export function displayAllBooks(): void {
        console.log('Fiction Bücher:', books);
    }
}

export namespace NonFiction {
    const MAX_BOOKS = 15;
    let books: string[] = [];

    export function addBook(name: string): void {
        if (books.length >= MAX_BOOKS) {
            console.error('Fehler: Maximale Anzahl von Büchern in NonFiction erreicht.');
        } else {
            books.push(name);
        }
    }

    export function removeBook(name: string): void {
        const index = books.indexOf(name);
        if (index === -1) {
            console.error('Fehler: Buch in NonFiction nicht gefunden.');
        } else {
            books.splice(index, 1);
        }
    }

    export function displayAllBooks(): void {
        console.log('NonFiction Bücher:', books);
    }
}

export namespace ScienceFiction {
    const MAX_BOOKS = 12;
    let books: string[] = [];

    export function addBook(name: string): void {
        if (books.length >= MAX_BOOKS) {
            console.error('Fehler: Maximale Anzahl von Büchern in ScienceFiction erreicht.');
        } else {
            books.push(name);
        }
    }

    export function removeBook(name: string): void {
        const index = books.indexOf(name);
        if (index === -1) {
            console.error('Fehler: Buch in ScienceFiction nicht gefunden.');
        } else {
            books.splice(index, 1);
        }
    }

    export function displayAllBooks(): void {
        console.log('ScienceFiction Bücher:', books);
    }
}
