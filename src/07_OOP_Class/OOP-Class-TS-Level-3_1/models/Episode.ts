import Actors from "./Actors";

class Episode {
    title: string;
    length: number;
    description: string;
    actors: Actors[];
    constructor(title: string, length: number, description: string, actors: Actors[]) {
        this.title = title;
        this.length = length;
        this.description = description;
        this.actors = actors;
    }
}

export default Episode;