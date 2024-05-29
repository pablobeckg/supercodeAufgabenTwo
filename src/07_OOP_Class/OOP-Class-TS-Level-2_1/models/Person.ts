class Person {
    id: number;
    firstName: string;
    lastName: string;
    birthday?: Date;
    constructor(id: number = 0, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName
    }
}

export default Person;