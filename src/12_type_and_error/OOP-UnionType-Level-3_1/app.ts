export{}

type MediaType = Video | Audio | Document | Presentation | Spreadsheet;

class Media {
    constructor(public mediaType: string, public url: string) {}
}

class Video extends Media {
    constructor(public url: string, public duration: number) {
        super('video', url);
    }
}

class Audio extends Media {
    constructor(public url: string, public duration: number) {
        super('audio', url);
    }
}

class Document extends Media {
    constructor(public url: string) {
        super('document', url);
    }
}

class Presentation extends Media {
    constructor(public url: string) {
        super('presentation', url);
    }
}

class Spreadsheet extends Media {
    constructor(public url: string) {
        super('spreadsheet', url);
    }
}

function playMedia(media: MediaType): void {
    switch (media.mediaType) {
        case 'video':
            console.log(`Playing video from ${media.url} with duration ${(media as Video).duration} minutes.`);
            break;

        case 'audio':
            console.log(`Playing audio from ${media.url} with duration ${(media as Audio).duration} minutes.`);
            break;

        case 'document':
            console.log(`Opening document from ${media.url}.`);
            break;

        case 'presentation':
            console.log(`Opening presentation from ${media.url}.`);
            break;

        case 'spreadsheet':
            console.log(`Opening spreadsheet from ${media.url}.`);
            break;
    
        default:
            console.log(`Error`);
            break;
    }
}

const video = new Video('https://example.com/video.mp4', 120);
const audio = new Audio('https://example.com/audio.mp3', 180);
const document = new Document('https://example.com/document.pdf');
const presentation = new Presentation('https://example.com/presentation.pptx');
const spreadsheet = new Spreadsheet('https://example.com/spreadsheet.xlsx');

playMedia(video); 
playMedia(audio); 
playMedia(document); 
playMedia(presentation);
playMedia(spreadsheet); 