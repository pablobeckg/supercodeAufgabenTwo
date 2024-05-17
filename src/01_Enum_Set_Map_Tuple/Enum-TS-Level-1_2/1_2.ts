enum PizzaSize {
    Small,
    Medium,
    Large,
    Familiar
}

enum PizzaIngredients {
    Cheese,
    Onion,
    Salami,
    Olives,
    Champignons
}

type Pizza = {size: PizzaSize, ingredients: PizzaIngredients};

function randomPizza() {
    return {size: PizzaSize[Math.floor(Math.random() * 4)], ingredients: PizzaIngredients[Math.floor(Math.random() * 5)]};
}

const pizza1 = randomPizza();
const pizza2 = randomPizza();
const pizza3 = randomPizza();
const pizza4 = randomPizza();

console.log(pizza1, pizza2, pizza3, pizza4);
