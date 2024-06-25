import { Americano, Espresso, Latte } from "./CafeeClases";
import ICoffee from "./ICoffee";
import coffeeTypes from "./cofeeEnum";

export class CoffeeShopFactory {
    static createCoffee(type: coffeeTypes, size: string): ICoffee | undefined {
        switch (type) {
          case coffeeTypes.Espresso:
            return new Espresso(size);
          case coffeeTypes.Americano:
            return new Americano(size);
          case coffeeTypes.Latte:
            return new Latte(size);
          default:
            return undefined;
        }
      }
}
