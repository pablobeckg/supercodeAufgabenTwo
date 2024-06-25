// main.ts
import { CoffeeShopFactory } from "./CoffeeShopFactory";
import coffeeEnum from "./cofeeEnum";

function testFactoryPattern() {
    const smallEspresso = CoffeeShopFactory.createCoffee(coffeeEnum.Espresso, 'Small');
    if (smallEspresso) {
        smallEspresso.brew();
        console.log(`Price: $${smallEspresso.getPrice()}`);
    }

    const mediumAmericano = CoffeeShopFactory.createCoffee(coffeeEnum.Americano, 'Medium');
    if (mediumAmericano) {
        mediumAmericano.brew();
        console.log(`Price: $${mediumAmericano.getPrice()}`);
    }

    const largeLatte = CoffeeShopFactory.createCoffee(coffeeEnum.Latte, 'Large');
    if (largeLatte) {
        largeLatte.brew();
        console.log(`Price: $${largeLatte.getPrice()}`);
    }
}

testFactoryPattern();
