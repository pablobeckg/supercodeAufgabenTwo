import Actor from "./models/Actors";
import Episode from "./models/Episode";
import Serie from "./models/Series";
import printSeriesInfo from "./models/printSeriesInfo";

const bryanCranston = new Actor('Bryan', 'Cranston', new Date('1989-12-26'), 'Male');
const aaronPaul = new Actor("Aaron", "Paul", new Date("1979-08-27"), "Male");
const annaGunn = new Actor("Anna", "Gunn", new Date("1968-08-11"), "Female");

const episode1 = new Episode("Pilot", 58, "The first episode of Breaking Bad", [bryanCranston, aaronPaul]);
const episode2 = new Episode("Cat's in the Bag...", 48, "The second episode of Breaking Bad", [bryanCranston, aaronPaul, annaGunn]);

const breakingBad = new Serie("Breaking Bad", "A high school chemistry teacher turned methamphetamine manufacturer", 2008, 2013, [episode1, episode2]);

printSeriesInfo(breakingBad);