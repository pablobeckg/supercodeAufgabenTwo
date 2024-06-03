class Song {
    private title: string;
    protected artist: string;
    public durationInSeconds: number;

    constructor(title: string, artist: string, durationInSeconds: number) {
        this.title = title;
        this.artist = artist;
        this.durationInSeconds = durationInSeconds;
    }
}

export default Song;