import SchoolClass from "./models/SchoolClass";

const math: SchoolClass = new SchoolClass(1, 'Math');
const science = new SchoolClass(2, "Science");
const history = new SchoolClass(3, "History");

// Ändern des Namens von zwei der SchoolClasses
math.name = "Advanced Mathematics";
science.name = "Physical Science";
console.log(math)
console.log(science)
console.log(history)