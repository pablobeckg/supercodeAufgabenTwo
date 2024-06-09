class CreditCard{
    _cardNumber: string = '';
    cardHolder: string;
    _expirationDate: Date = new Date;
    _cvv: string = '';

    constructor(cardHolder:string){
        this.cardHolder = cardHolder;
    }

    get cardNumber(){
        return this._cardNumber;
    }

    set cardNumber(value: string){
        if(value.length == 16 ){
            this._cardNumber = value;
        } else {
            null
        }
    }

    get expirationDate() {
        return this._expirationDate
    }

    set expirationDate(value) {
        if (this._expirationDate < value) {
            this._expirationDate = value;
        } else {
            null
        }
    }

    get cvv() {
        return this._cvv
    }

    set cvv(value: string) {
        if(value.length == 3 ){
            this._cvv = value;
        } else {
            null
        }
    }
    
}

export {CreditCard};