class Rectangle implements Ishape {
    name: string = "";
    color: string = "";
    width: number = 0;
    height: number = 0;
    draw() {
        console.log('Drawing rectangel')
    }

    isRound() {
        return false;
    }
}