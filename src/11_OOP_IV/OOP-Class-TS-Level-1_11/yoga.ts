import Activity from "./activity";

enum YogaType {
    Hatha,
    Vinyasa,
    Ashtanga,
    Bikram
}

class Yoga extends Activity {
    type: YogaType;

    constructor(name: string, difficulty: number, type: YogaType) {
        super(name, difficulty);
        this.type = type;
    }
}

  export default Yoga;