import Song from "./Song";

class SongWithUnknownArtist extends Song {
    constructor(title: string) {
        super(title, "Unknown", 0);
    }
    setArtist(value: string) {
        this.artist = value;
    }
}

export default SongWithUnknownArtist;