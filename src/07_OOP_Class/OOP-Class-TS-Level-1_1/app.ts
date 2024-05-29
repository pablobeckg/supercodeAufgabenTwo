import IceCreamFlavor from "./models/icecremflavor"

const strawberry: IceCreamFlavor = new IceCreamFlavor
strawberry.name = 'Strawberry';
strawberry.price = 2;
strawberry.isPopular = true;
strawberry.description = 'It is delicious'

console.log(strawberry)

const chocolate: IceCreamFlavor = new IceCreamFlavor
chocolate.name = 'Chocolate';
chocolate.price = 3;
chocolate.isPopular = false;
chocolate.description = 'It is super delicious'

console.log(chocolate)

const banana: IceCreamFlavor = new IceCreamFlavor
banana.name = 'Banana';
banana.price = 5;
banana.isPopular = true;
banana.description = 'It is super duper delicious'

console.log(banana)

const mango: IceCreamFlavor = new IceCreamFlavor
mango.name = 'Mango';
mango.price = 5;
mango.isPopular = false;
mango.description = 'It is super duper ultra delicious'

console.log(mango)

const iceCreamFlavors = [strawberry, chocolate, banana, mango];

iceCreamFlavors.forEach(flavor => {
    if (flavor.isPopular) {
        console.log(flavor.name);
    }
});

