class Manager implements IEmplyee{
    name: string = '';
    age: number= 0;
    position: string = '';
    private assignedEmployees: IEmplyee[] = [];

    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    addSubordinate(subordinate: IEmplyee) {
        this.assignedEmployees.push(subordinate)
    }
}
export default Manager;