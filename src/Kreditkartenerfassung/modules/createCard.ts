import { CreditCard } from "./Credit.Card";

const cardOutputArea = document.getElementById("card-output-area") as HTMLDivElement;

function createCard(cardNumber:string, cardHolder:string, expDate:Date, cvv:string){
    
    const newCard = new CreditCard(cardHolder);
    newCard.cardNumber = cardNumber;
    newCard.expirationDate = expDate;
    newCard.cvv = cvv;

    const newCardDiv = document.createElement("div")
    newCardDiv.setAttribute('class', 'card-container')
    cardOutputArea.appendChild(newCardDiv)

    const newCardnumber = document.createElement("h3")
    newCardDiv.appendChild(newCardnumber)  
    const newInfoDiv = document.createElement("div")
    const newCardholder = document.createElement("h3")
    const newExpDate = document.createElement("h3")
    newCardDiv.appendChild(newInfoDiv) 
    newInfoDiv.appendChild(newCardholder)
    newInfoDiv.appendChild(newExpDate)
    
    newCardnumber.textContent = newCard.cardNumber
    newCardholder.textContent =newCard.cardHolder
    newExpDate.textContent = newCard.expirationDate.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit' });

    newCardDiv.addEventListener('dblclick', () => {
        newCardDiv.remove()
    })
}

export default createCard;