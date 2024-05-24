type NewCustomer = { firstName: string; lastName: string; email?: string; phone?: string };

const getName = document.getElementById('name') as HTMLInputElement;
const getLastName = document.getElementById('lastname') as HTMLInputElement;
const getEmail = document.getElementById('email') as HTMLInputElement;
const getPhone = document.getElementById('phone') as HTMLInputElement;
const getForm = document.querySelector('form') as HTMLFormElement;
const output = document.getElementById('greetingOutput');

const greetNewUser1 = (newCustomer: NewCustomer): string => {
    let greeting = `Hello ${newCustomer.firstName} ${newCustomer.lastName}. We will`;

    if (newCustomer.email && newCustomer.phone) {
        greeting += ` contact you via ${newCustomer.email} and ${newCustomer.phone}`;
    } else if (newCustomer.email) {
        greeting += ` contact you via ${newCustomer.email}`;
    } else if (newCustomer.phone) {
        greeting += ` contact you via ${newCustomer.phone}`;
    } else {
        greeting += ` not contact you`;
    }

    return greeting;
}


const greetNewUser2 = (firstName: string, lastName: string, email?: string, phone?: string): string  => {
    let greeting = `Hello ${firstName} ${lastName}. We will`;

    if (email && phone) {
        greeting += ` contact you via ${email} and ${phone}`;
    } else if (email) {
        greeting += ` contact you via ${email}`;
    } else if (phone) {
        greeting += ` contact you via ${phone}`;
    } else {
        greeting += ` not contact you`;
    }

    return greeting;
}

getForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const newCustomer: NewCustomer = {
        firstName: getName.value,
        lastName: getLastName.value,
        email: getEmail.value,
        phone: getPhone.value
    };

    console.log(greetNewUser1(newCustomer));
    if (output) {
        output.innerHTML = greetNewUser2(newCustomer.firstName, newCustomer.lastName, newCustomer.email, newCustomer.phone)
    }
});
