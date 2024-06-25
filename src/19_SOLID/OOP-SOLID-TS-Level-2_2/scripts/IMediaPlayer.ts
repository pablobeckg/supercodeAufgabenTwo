import { IAudioPlayer, IAudioRecorder, IVideoPlayer, IVideoRecorder } from "./Interfaces";

export class AudioPlayer implements IAudioPlayer {
    fileName: string;
    length: number;

    constructor(fileName: string, length: number) {
        this.fileName = fileName;
        this.length = length;
    }

    playAudio(): void {
        console.log(`Playing audio file: ${this.fileName}`);
    }
}

export class AudioRecorder implements IAudioRecorder {
    fileName: string;
    length: number;

    constructor(fileName: string, length: number) {
        this.fileName = fileName;
        this.length = length;
    }

    recordAudio(): void {
        console.log(`Recording audio file: ${this.fileName}`);
    }
}

export class VideoPlayer implements IVideoPlayer {
    fileName: string;
    length: number;

    constructor(fileName: string, length: number) {
        this.fileName = fileName;
        this.length = length;
    }

    playVideo(): void {
        console.log(`Playing video file: ${this.fileName}`);
    }
}

export class VideoRecorder implements IVideoRecorder {
    fileName: string;
    length: number;

    constructor(fileName: string, length: number) {
        this.fileName = fileName;
        this.length = length;
    }

    recordVideo(): void {
        console.log(`Recording video file: ${this.fileName}`);
    }
}
