let marvelCharacters: string[] = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Spider Man"];

marvelCharacters.push("Iron Man");
marvelCharacters.push("Thor");

console.log(marvelCharacters);

let marvelSet: Set<string> = new Set(marvelCharacters);

console.log(marvelSet);
