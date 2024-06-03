import SongWithUnknownArtist from "./models/SongWithUnknownArtist";

const newSong:SongWithUnknownArtist = new SongWithUnknownArtist('Breath')

console.log(newSong);
newSong.setArtist("Pink Floyd");
console.log(newSong);

