import Singer from "./Singer";

class Beyonce extends Singer {
    constructor(name: string) {
       super(name);
    }
    sing(): string {
        return "I'm a survivor, I'm gonna make it!";
    }
}

export default Beyonce;