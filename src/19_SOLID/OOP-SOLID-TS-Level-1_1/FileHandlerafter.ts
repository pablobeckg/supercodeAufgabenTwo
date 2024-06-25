export class FileReader {
    readFromFile(): string {
        return "Dateiinhalt";
    }
}

export class FileWriter {
    writeToFile(text: string): void {
        console.log(text);
    }
}

export class FileInfoProvider {
    getFileInfo(): void {
        console.log('Dateigröße, Dateiendung');
    }
}


