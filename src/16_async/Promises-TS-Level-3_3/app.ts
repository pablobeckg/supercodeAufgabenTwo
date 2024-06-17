function order(customerNumber: number, customerDiv: HTMLDivElement): Promise<string> {
  const customerNumberOrder = document.createElement('p');
  customerDiv.appendChild(customerNumberOrder)
  customerNumberOrder.textContent = `${customerNumber}. Person in der Reihe`
  const order = document.createElement('p');
  customerDiv.appendChild(order)
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(order.textContent = '📝 Bestellung aufnehmen');
      }, getRandomDurationInMilliseconds());
  });
}
function pay(customerDiv: HTMLDivElement) {
  const pay = document.createElement('p');
  customerDiv.appendChild(pay)
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(pay.textContent = '💳 Bezahlung durchführen');
    }, getRandomDurationInMilliseconds());
});
}
function makeBurger(customerDiv: HTMLDivElement) {
  const makeBurger = document.createElement('p');
  customerDiv.appendChild(makeBurger)
  makeBurger.textContent = '🍔 Bereite einen Burger vor'
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(`🍔 Burger fertig`);
    }, getRandomDurationInMilliseconds());
});
}
function makeFries(customerDiv: HTMLDivElement) {
  const friesP = document.createElement('p');
  customerDiv.appendChild(friesP)
  friesP.textContent = '🍟 Bereite Pommes vor'
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(`🍟 Pommes fertig`);
    }, getRandomDurationInMilliseconds());
});
}
function makeDrink(drink: string, customerDiv: HTMLDivElement) {
  const makeDrink = document.createElement('p');
  customerDiv.appendChild(makeDrink)
  makeDrink.textContent = `🥤 Fülle ${drink} ein`
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(`🥤 Cola fertig`);
    }, getRandomDurationInMilliseconds());
});

}


document.getElementById('startSimulation')?.addEventListener('click', () => {
  const ordersDiv = document.getElementById('orders')!;
  ordersDiv.innerHTML = '';

  createCustomerOrder(1, 'Cola');
  createCustomerOrder(2, 'Sprite');
  createCustomerOrder(3, 'Wasser');
});

function createCustomerOrder (id: number, drink: string) {
  
  const orderDiv = document.createElement('div');
    orderDiv.className = 'order';
    orderDiv.id = `order-${id}`;
    document.getElementById('orders')!.appendChild(orderDiv);

    processOrder(id, drink, orderDiv)
}

function processOrder(customerNumber: number, drink: string, customerDiv: HTMLDivElement) {
  Promise.all([
    order(customerNumber, customerDiv),
    pay(customerDiv),
    makeBurger(customerDiv),
    makeFries(customerDiv),
    makeDrink(drink, customerDiv)
  ]).then(() => {
    console.log('Bestellung abgeschlossen.');
    customerDiv.innerHTML += '✅ Bestellung abgeschlossen.<br>';
  });
}

function getRandomDurationInMilliseconds(): number {
  const min = 2000;
  const max = 12000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

