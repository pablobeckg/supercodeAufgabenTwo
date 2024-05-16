const bands = {
    "The Beatles": ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
    "Queen": ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "Kiss": ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"],
    "NWA": ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"],
    "Kraftwerk": ["Ralf Hütter", "Florian Schneider", "Karl Bartos", "Wolfgang Flür"],
    "Pink Floyd": ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"],
    "Metallica": ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"],
    "The Rolling Stones": ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"],
    "U2": ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]}

const bands2 = new Map(Object.entries(bands));

console.log(bands2);

const favoriteBands = new Map<string, string[]>();
favoriteBands.set("The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]);
favoriteBands.set("Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]);
favoriteBands.set("Kiss", ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"]);
favoriteBands.set("NWA", ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"]);
favoriteBands.set("Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]);

console.log(favoriteBands);
console.log(favoriteBands.size);
favoriteBands.set("Led Zeppelin", ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"]);
console.log(favoriteBands.size);
console.log(favoriteBands.get('Queen'));

for (const [band, members] of bands2) {
    console.log(band);
    console.log(members[members.length -1]);
}
