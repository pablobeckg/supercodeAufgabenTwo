class Circle implements Ishape {
    name: string = '';
    color: string = '';
    radius: number = 0;
    constructor(name: string) {
        this.name = name
    }
    public draw() {
        console.log('Drawing circle')
    }

    isRound() {
        return true;
    }
}

export default Circle