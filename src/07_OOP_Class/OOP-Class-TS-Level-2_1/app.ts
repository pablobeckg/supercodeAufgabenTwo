import Person from "./models/Person";
import SchoolClass from "./models/SchoolClass";

const math: SchoolClass = new SchoolClass(1, 'Math');
const science = new SchoolClass(2, "Science");
const history = new SchoolClass(3, "History");

math.name = "Advanced Mathematics";
science.name = "Physical Science";
console.log(math)
console.log(science)
console.log(history)

const studentsOfMath = [
    new Person(1, "John", "Doe",),
    new Person(2, "Jane", "Doe"),
    new Person(3, "Jim", "Beam")
];

math.students = studentsOfMath;

console.log(math.students)