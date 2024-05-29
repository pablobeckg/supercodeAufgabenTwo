class SchoolClass {
    id: number;
    name: string;
    endDate?: string = undefined;
    constructor(id: number = 0, name: string) {
        this.id = id;
        this.name = name;
        console.log('School class creation successful')
    }
}

export default SchoolClass;