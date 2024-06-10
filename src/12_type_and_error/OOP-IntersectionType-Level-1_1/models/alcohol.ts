type Alcohol = {
    name: string;
    percentage: number;
    type: string;
}

type Mixer = {
    name: string;
    type: string;
    carbonated: boolean;
}

type Cocktail = Alcohol & Mixer;

const newCoctail: Cocktail = {
    name: "Pisco Sour",
    percentage: 30,
    type: "Pisco",
    carbonated: false
};

console.log(newCoctail.name);
console.log(newCoctail.percentage);
console.log(newCoctail.type);
console.log(newCoctail.carbonated);
