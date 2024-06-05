class Activity {
    name: string;
    private _difficulty: number = 0;

    constructor(name: string, difficulty: number) {
        this.name = name;
        this.difficulty = difficulty;
    }


    get difficulty(): number {
        return this._difficulty;
    }

    set difficulty(value: number) {
        if (value < 1 || value > 6) {
            throw new Error('Difficulty must be between 1 and 6');
        }
        this._difficulty = value;
    }

    execute(): void {
        console.log(`Executing ${this.name}...`);
    }
}

export default Activity