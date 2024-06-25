class FileHandler {
    readFromFile(): string {
        return 'Dateiinhalt'
    }
    writeToFile(text: string): void {
        console.log(`${text}`)
    }
    getFileInfo(): void  {
        console.log('Dateigröße, Dateiendung')
    }
}

