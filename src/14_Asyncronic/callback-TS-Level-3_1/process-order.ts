import { OrderStatus } from "./OrderStatus_enum"

export function processOrder(name: string, callback: (name: string, status: OrderStatus) => void) {
    const statuses = [
        OrderStatus.Processing,
        OrderStatus.ReadyForShipping,
        OrderStatus.Shipped,
        OrderStatus.Delivered
    ];

    statuses.forEach((status, index) => {
        setTimeout(() => {
            console.log(`Order is ${OrderStatus[status].toLowerCase().replace(/_/g, ' ')}`);
            callback(name, status);
        }, 1000 * (index + 1)); 
    });
}



export function sendEmail(name: string, status: OrderStatus) {
    console.log(`Send email to ${name}. Status: ${status}`)
}

export function sendSMS(name: string, status: OrderStatus) {
    console.log(`Send sms to ${name}. Status: ${status}`)
}

export function sendLetter(name: string, status: OrderStatus) {
    console.log(`Send letter to ${name}. Status: ${status}`)
}

export function doNothing() {
    console.log(`No info`)
}

