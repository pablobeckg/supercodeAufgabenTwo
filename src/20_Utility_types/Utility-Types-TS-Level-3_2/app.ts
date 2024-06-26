import { ISmoothie, SmoothieSize, customizeSmoothie } from "./smoothie";


// Beispiel Smoothie
const basicSmoothie: ISmoothie = {
    name: 'Banana Berry Blast',
    ingredients: ['banana', 'berries', 'yogurt'],
    size: SmoothieSize.Medium,
    price: 5.99
};

// Anpassungen vornehmen
const customizedSmoothie: Partial<ISmoothie> = {
    size: SmoothieSize.Large,
    price: 6.99
};

// Smoothie anpassen
const finalSmoothie = customizeSmoothie(basicSmoothie, customizedSmoothie);

console.log(finalSmoothie);
