import Singer from "./Singer";

class TheWho extends Singer {
    constructor(name: string) {
        super(name);
    }

    sing(): string {
        return "I#m free, i#m free and freedom tastes of reality";
    }
}

export default TheWho
