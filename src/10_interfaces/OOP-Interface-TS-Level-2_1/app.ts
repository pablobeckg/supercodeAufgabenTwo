import Manager from "./manager";
import Subordinate from "./subordinate";

const newSubordinate1 = new Subordinate('Luis', 45, 'subordinate');
const newSubordinate2 = new Subordinate('Pepe', 32, 'subordinate');
const newSubordinate3 = new Subordinate('Jose', 25, 'subordinate');

const newManager = new Manager('Pablo', 34, 'manager');

newManager.addSubordinate(newSubordinate1)
newManager.addSubordinate(newSubordinate2)
newManager.addSubordinate(newSubordinate3)

console.log(newManager)