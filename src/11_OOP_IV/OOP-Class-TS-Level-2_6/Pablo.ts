import Singer from "./Singer";

class Pablo extends Singer {
    constructor(name: string) {
        super(name);
    }

    sing(): string {
        return "Hola que tal";
    }
}

export default Pablo;
