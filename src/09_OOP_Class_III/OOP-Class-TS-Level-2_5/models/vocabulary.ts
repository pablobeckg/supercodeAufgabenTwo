class Vocabulary {
    private _words: string[] = [];
    protected language: string = '';

    constructor(language: string) {
        this.language = language;
    }

    public addWord(word: string) {
        if (word.length > 0 && !this._words.includes(word)) {
            this._words.push(word);
        } else {
            console.error('You must add a new word')
        }
    }
    public displayAll() {
        console.log(this.language);
        console.log(this._words.join(', '));
    }
}

export default Vocabulary