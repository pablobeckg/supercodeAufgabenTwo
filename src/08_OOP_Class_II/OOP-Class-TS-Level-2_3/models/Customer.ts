class Customer {
    private _name: string = '';
    private _email: string = '';
    private _address: string;
    private _postalCode: number = 0;
    private _city: string;

    constructor(address: string, city: string) {
        this._address = address;
        this._city = city;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length <= 60) {
            this._name = value;
        } else {
            console.error("Fehler: Der Name darf nicht mehr als 60 Zeichen enthalten.");
        }
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (value.includes('@') && value.includes('.')) {
            this._email = value.toLowerCase();
        } else {
            console.error("Fehler: Die E-Mail-Adresse muss ein '@'-Zeichen und einen Punkt enthalten.");
        }
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get postalCode(): number {
        return this._postalCode;
    }

    set postalCode(value: number) {
        if (value >= 0 && value <= 99999 && value.toString().length === 5) {
            this._postalCode = value;
        } else {
            console.error("Fehler: Die Postleitzahl muss 5-stellig sein und zwischen 00000 und 99999 liegen.");
        }
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }
}

export default Customer
