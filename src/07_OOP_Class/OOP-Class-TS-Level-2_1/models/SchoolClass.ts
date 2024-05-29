import Person from "./Person";

class SchoolClass {
    id: number;
    name: string;
    students: Person[];
    endDate?: Date;
    constructor(id: number = 0, name: string) {
        this.id = id;
        this.name = name;
        this.students = [];
        console.log('School class creation successful')
    }
}

export default SchoolClass;