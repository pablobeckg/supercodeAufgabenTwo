import Beyonce from "./Beyonce";
import FreddieMercury from "./Freddy";
import Pablo from "./Pablo";
import Singer from "./Singer";
import TheWho from "./Who";

function letsSing(singer: Singer) {
    let emoji: string;

    if (singer instanceof Beyonce) {
        emoji = "👩‍🎤";
    } else if (singer instanceof FreddieMercury) {
        emoji = "👨🏻‍🦱";
    } else if (singer instanceof Pablo) {
        emoji = "🚀";
    } else if (singer instanceof TheWho) {
        emoji = "🕺";
    } else {
        console.log(`Unknown singer type: ${singer.name}`);
        return;
    }
    console.log(`${emoji} "${singer.name}" sings "${singer.sing()}"`);
}
    const beyonce = new Beyonce("Beyoncé");
    const freddie = new FreddieMercury("Freddie Mercury");
    const pablo = new Pablo("Pablo");
    const theWhoo = new TheWho("The Who");
    
    letsSing(beyonce);
    letsSing(freddie);
    letsSing(pablo);
    letsSing(theWhoo);