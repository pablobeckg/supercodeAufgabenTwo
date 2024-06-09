import createCard from "./modules/createCard";

const cardNumberInput = document.getElementById('card-number-input') as HTMLInputElement;
const cardHolderInput = document.getElementById('card-holder-input') as HTMLInputElement;
const expDateInput = document.getElementById('exp-date-input') as HTMLInputElement;
const cvvInput = document.getElementById('cvv-input') as HTMLInputElement;
const formWrapper = document.getElementById('form-wrapper') as HTMLFormElement;


    formWrapper.addEventListener('submit', (event: Event) => {
        event.preventDefault(); 
        if(cardNumberInput.value.length == 16 && cardHolderInput.value.length > 0 && new Date(`${expDateInput.value}`) > new Date() && cvvInput.value.length == 3) {
        createCard(cardNumberInput.value, cardHolderInput.value, new Date(`${expDateInput.value}`), cvvInput.value);
        cardNumberInput.value = '';
        cardHolderInput.value = '';
        expDateInput.value = '';
        cvvInput.value = '';
    } else if (cardNumberInput.value.length != 16) {
        window.alert('Card number must be 16 ciphers.')
    }   else if (new Date(`${expDateInput.value}`) < new Date()) {
        window.alert('Expiration date must be in the future.')
    }   else if (cvvInput.value.length != 3) {
        window.alert('CVV number must be 3 ciphers.')
    }
    });




