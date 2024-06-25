export interface IAudioPlayer {
    fileName: string;
    length: number;
    playAudio(): void;
}

export interface IAudioRecorder {
    fileName: string;
    length: number;
    recordAudio(): void;
}

export interface IVideoPlayer {
    fileName: string;
    length: number;
    playVideo(): void;
}

export interface IVideoRecorder {
    fileName: string;
    length: number;
    recordVideo(): void;
}