import Serie from "./Series";

function printSeriesInfo(serie: Serie): void {
    console.log(`Title: ${serie.title}`);
    console.log(`Description: ${serie.description}`);
    console.log(`Start Year: ${serie.startYear}`);
    console.log(`End Year: ${serie.endYear !== null ? serie.endYear : 'Ongoing'}`);
    console.log(`Number of Episodes: ${serie.episodes.length}`);
    console.log("\nActors:")
    serie.episodes.forEach(episode => {
        episode.actors.forEach(actor => {
            
                console.log(`Name: ${actor.firstName} ${actor.lastName}`);
                console.log(`Birthday: ${actor.birthday}`);
                console.log(`Gender: ${actor.gender}`);
                console.log("---");
        })
    });
}

export default printSeriesInfo;