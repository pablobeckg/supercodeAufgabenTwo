import Singer from "./Singer";

class FreddieMercury extends Singer {
    constructor(name: string) {
        super(name);
    }

    sing(): string {
        return "We will, we will rock you!";
    }
}

export default FreddieMercury