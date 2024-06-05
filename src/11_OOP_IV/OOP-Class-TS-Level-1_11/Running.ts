import Activity from "./activity";

class Running extends Activity{
    distance: number;

    constructor(name: string, difficulty: number, distance: number) {
        super(name, difficulty);
        this.distance = distance;
    }

    getWarmUpCoolDownTime(): number {
        if (this.distance > 10) {
            return 5;
        } else if (this.distance >= 7) {
            return 4;
        } else if (this.distance >= 4.5) {
            return 3;
        } else if (this.distance >= 3) {
            return 2;
        } else {
            return 1;
        }
    }

    warmUp(): void {
        const time = this.getWarmUpCoolDownTime();
        console.log(`Warming up for ${time} minutes`);
    }

    coolDown(): void {
        const time = this.getWarmUpCoolDownTime();
        console.log(`Cooling down for ${time} minutes`);
    }
}

export default Running