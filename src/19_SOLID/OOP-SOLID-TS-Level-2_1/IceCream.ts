class IceCream {
    getPrice(preis: number): number {
        return preis;
    }

    getDescription(sort: string): string {
        return `Ich bin eine ${sort}-Eiskugel.`;
    }
}

class VanillaIceCream extends IceCream {}
class ChocolateIceCream extends IceCream {}
class StrawberryIceCream extends IceCream {}

const strawberryIceCream = new StrawberryIceCream();
console.log(strawberryIceCream.getPrice(2.2));
console.log(strawberryIceCream.getDescription('Erdbeer'));
