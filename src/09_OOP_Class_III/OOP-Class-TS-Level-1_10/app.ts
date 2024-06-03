import TeaType from "./Teatype";
import CoffeeType from "./models/CoffeeType";
import Beverage from "./models/beverage";
import Coffee from "./models/coffee";
import Tea from "./tea";

const beverage1 = new Beverage('Beer', 4)
const tea1 = new Tea("Green Tea", 2, TeaType.Green);
const coffee1 = new Coffee('Espresso', 3, CoffeeType.Espresso);

console.log(beverage1);
console.log(tea1);
console.log(coffee1);