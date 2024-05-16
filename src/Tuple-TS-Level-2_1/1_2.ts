type Tuple = [number, string, string, number];
const Mitarbeitenden: Tuple = [1, 'Pablo', 'Chef', 100000];
const Mitarbeitenden2: Tuple = [2, 'Manuel', 'Owner', 100];
const Mitarbeitenden3: Tuple = [3, 'Pedro', 'Cleaner', 20000];
const Mitarbeitenden4: Tuple = [4, 'Jose', 'Secretary', 30000];
const Mitarbeitenden5: Tuple = [15, 'Maria', 'Manager', 15000];

const tupleArray:Tuple[] = [Mitarbeitenden, Mitarbeitenden2, Mitarbeitenden3, Mitarbeitenden4,Mitarbeitenden5];

function logMitarbeitenden() {
    tupleArray.forEach(mitarbeiter => {
        console.log(mitarbeiter[1] + ' is the ' + mitarbeiter[2] + ' and earns ' + mitarbeiter[3] + ' Euros.');
    });
}

logMitarbeitenden();