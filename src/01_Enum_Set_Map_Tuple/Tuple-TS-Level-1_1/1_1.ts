const starWarsActor: [string, string] = ["Luke Skywalker", "Mark Hamill"];
const starWarsActor2: [string, string] = ["Darth Vader", "James Earl Jones"];
const starWarsActor3: [string, string] = ["Yoda", "Frank Oz"];
const starWarsActor4: [string, string] = ["Han Solo", "Harrison Ford"];
const starWarsActor5: [string, string] = ["Princess Leia", "Carrie Fisher"];

const actorsArray = [starWarsActor, starWarsActor2, starWarsActor3, starWarsActor4, starWarsActor5];

actorsArray.forEach(actor => {
    console.log(actor[1] + ' spielt ' + actor[0]);
});
