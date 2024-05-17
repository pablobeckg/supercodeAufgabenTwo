const starWarsCharacters = new Set<string>();
starWarsCharacters.add('Luke Skywalker');
starWarsCharacters.add('Darth Vader');
starWarsCharacters.add('Obi Wan Kenobi');
starWarsCharacters.add('Leia Organa');
starWarsCharacters.add('Leia Organa');

console.log(starWarsCharacters);




const starWarsArray: string[] = ['Luke Skywalker', 'Darth Vader', 'Obi Wan Kenobi'];

const starWarsCharacters2 = new Set(starWarsArray);
starWarsCharacters2.add('Leia Organa');
starWarsCharacters2.add('Leia Organa');
console.log(starWarsCharacters2);