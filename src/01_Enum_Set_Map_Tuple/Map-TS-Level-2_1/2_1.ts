const band3 = {
    "The Beatles": ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
    "Queen": ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "Kiss": ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"],
    "NWA": ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"],
    "Kraftwerk": ["Ralf Hütter", "Florian Schneider", "Karl Bartos", "Wolfgang Flür"],
    "Pink Floyd": ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"],
    "Metallica": ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"],
    "The Rolling Stones": ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"],
    "U2": ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]}

const bands4 = new Map(Object.entries(band3));

if(bands4.has('Metallica')) {
    console.log('yes');
}

bands4.set("The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr", "Pete Best"]);


console.log(bands4.get("The Beatles"));



