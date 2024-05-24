let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: 1.78,
    zeigeProfil: function () {
        return `Name: ${this.vorname}\nNachname: ${this.nachname}\nAlter: ${this.alter}\nFamilienstand: ${this.familienstand}\nGrösse: ${this.groesse}`;
    }
};

const getPerson = document.getElementById("person");

if (getPerson) {
    // Replace new line characters with <br> for HTML
    getPerson.innerHTML = person.zeigeProfil().replace(/\n/g, '<br>');
}

// let person2 = {
//     vorname: 'Pedro',
//     nachname: 'Manuel',
//     alter: 73,
//     familienstand: 'married',
//     groesse: 1.77,
//     zeigeProfil: () => {
//         return `Name: ${this.vorname}\nNachname: ${this.nachname}\nAlter: ${this.alter}\nFamilienstand: ${this.familienstand}\nGrösse: ${this.groesse}`;
//     }
// };