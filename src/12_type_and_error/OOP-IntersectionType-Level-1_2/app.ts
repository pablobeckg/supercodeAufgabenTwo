function mixCocktail(alcohol: Alcohol, mixer: Mixer): void {
    console.log({
        name: `${alcohol.name} ${mixer.name}`,
        percentage: alcohol.percentage,
        carbonated: false,
    }) 
}

const vodka: Alcohol = {
    name: 'Wodka', percentage: 40,
    type: ""
};
const rum: Alcohol = {
    name: 'Rum', percentage: 35,
    type: ""
};
const lemon: Mixer = {
    name: 'Lemon',
    type: "",
    carbonated: false
};
const cola: Mixer = {
    name: 'Cola',
    type: "",
    carbonated: false
};

mixCocktail(vodka, lemon);
mixCocktail(rum, cola);