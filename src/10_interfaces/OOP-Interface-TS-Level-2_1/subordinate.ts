class Subordinate implements IEmplyee {
    name: string = '';
    age: number= 0;
    position: string = '';

    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }
}

export default Subordinate;