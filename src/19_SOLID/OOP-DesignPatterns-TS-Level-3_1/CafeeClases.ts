import ICoffee from "./ICoffee";

export class Espresso implements ICoffee {
    name = 'Espresso';
    size: string;

    constructor(size: string) {
        this.size = size;
    }

    brew(): void {
        console.log(`Brewing a ${this.size} ${this.name}`);
    }

    getPrice(): number {
        return 2.0;
    }
}

export class Americano implements ICoffee {
    name = 'Americano';
    size: string;

    constructor(size: string) {
        this.size = size;
    }

    brew(): void {
        console.log(`Brewing a ${this.size} ${this.name}`);
    }

    getPrice(): number {
        return 2.5;
    }
}

export class Latte implements ICoffee {
    name = 'Latte';
    size: string;

    constructor(size: string) {
        this.size = size;
    }

    brew(): void {
        console.log(`Brewing a ${this.size} ${this.name}`);
    }

    getPrice(): number {
        return 3.0;
    }
}
