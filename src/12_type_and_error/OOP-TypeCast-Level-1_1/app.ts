import IStudent from "./contract/IStudent";

function processStudent(student: IStudent): void {
    console.log(`Processing ${student.name}...`)
}

const student1 = {
    name: "John Doe",
    age: 20
} as IStudent;

processStudent(student1);

const student2 = {
    age: 22
} as IStudent;

//Name wird undefined sein
processStudent(student2);