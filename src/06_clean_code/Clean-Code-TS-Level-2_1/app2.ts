const numberArray = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

const userInput: number = Math.ceil(Math.random() * 7);

const convertNumberToText = (num: number ): string  => numberArray[num];
 
const outputNumberToText = convertNumberToText(userInput);

console.log(outputNumberToText);
