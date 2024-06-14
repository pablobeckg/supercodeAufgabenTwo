import { ContactType } from "./ContactType_enum";
import { doNothing, processOrder, sendEmail, sendLetter, sendSMS } from "./process-order";



export class Customer {
    name: string;
    address: string;
    phone: string;
    email: string;
    contactType: ContactType;

    constructor(name: string, address: string, phone: string, email: string, contactType: ContactType) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.contactType = contactType;
    }
}

export function processCustomerOrder(customer: Customer): void {
    switch (customer.contactType) {
        case ContactType.Email:
            processOrder(customer.name, sendEmail);
            break;
        case ContactType.SMS:
            processOrder(customer.name, sendSMS);
            break;
        case ContactType.Letter:
            processOrder(customer.name, sendLetter);
            break;
        case ContactType.None:
        default:
            processOrder(customer.name, doNothing);
            break;
    }
}

