import Beyonce from "./Beyonce";
import FreddieMercury from "./Freddy";
import Pablo from "./Pablo";
import TheWho from "./Who";

class Singer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    sing(): string {
        return "";
    }

    letsSing() {
        let emoji: string;

        if (this instanceof Beyonce) {
            emoji = "👩‍🎤";
        } else if (this instanceof FreddieMercury) {
            emoji = "👨🏻‍🦱";
        } else if (this instanceof Pablo) {
            emoji = "🚀";
        } else if (this instanceof TheWho) {
            emoji = "🕺";
        } else {
            console.log(`Unknown singer type: ${this.name}`);
            return;
        }
        console.log(`${emoji} "${this.name}" sings "${this.sing()}"`);
    }
}

export default Singer