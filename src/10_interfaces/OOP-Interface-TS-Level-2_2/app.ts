import Trainee from "./Trainee";
import Manager from "./manager";
import Subordinate from "./subordinate";

const newSubordinate1 = new Subordinate('Luis', 45, new Date('2015-01-01'));
const newSubordinate2 = new Subordinate('Pepe', 32, new Date('2010-01-01'));
const newSubordinate3 = new Subordinate('Jose', 25, new Date('2017-01-01'));

const newManager = new Manager('John Doe', 40, new Date('2020-01-01'));

newManager.addSubordinate(newSubordinate1)
newManager.addSubordinate(newSubordinate2)
newManager.addSubordinate(newSubordinate3)

const newTrainee = new Trainee('Manuel', 14, new Date('2020-01-01'))
const newTrainee2 = new Trainee('Joe', 16, new Date('2010-01-01'))
const newTrainee3 = new Trainee('Pat', 12, new Date('2021-01-01'))

newManager.addSubordinate(newTrainee);
newManager.addSubordinate(newTrainee2);
newManager.addSubordinate(newTrainee3);

console.log(newManager)