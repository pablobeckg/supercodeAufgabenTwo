document.addEventListener('DOMContentLoaded', () => {
    const outputElement = document.querySelector('output');
    const myList = document.getElementById('myList');
  
    if (!outputElement || !myList) {
      console.error('Required elements not found in the DOM');
      return;
    }
  
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        let textToDisplay = '';
  
        switch (button.textContent) {
          case '# firstElementChild':
            textToDisplay = myList.firstElementChild?.innerHTML || 'No element found';
            break;
          case '# lastElementChild':
            textToDisplay = myList.lastElementChild?.innerHTML || 'No element found';
            break;
          case '# firstElementChild nextElementSibling':
            textToDisplay = myList.firstElementChild?.nextElementSibling?.innerHTML || 'No element found';
            break;
          case '# lastElementChild previousElementSibling':
            textToDisplay = myList.lastElementChild?.previousElementSibling?.innerHTML || 'No element found';
            break;
        }
  
        outputElement.innerHTML = textToDisplay;
      });
    });
  });
  