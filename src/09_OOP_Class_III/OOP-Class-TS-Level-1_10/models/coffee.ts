import CoffeeType from "./CoffeeType";
import Beverage from "./beverage";

class Coffee extends Beverage{
    type: CoffeeType;
  
    constructor(name: string, price: number, type: CoffeeType) {
        super(name, price)
        this.type = type;
    }
  }

  export default Coffee;