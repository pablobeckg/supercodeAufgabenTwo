import Animal from "./models/Animal";
// import Person from "./models/Person";

const Cat = new Animal("Cat", 2, "Black");
console.log(Cat.species);
Cat.age = 4;
console.log('-----')
console.log(Cat.age)



