// import functions
import { add } from './calculations.js';
//console.log(add(50, 212));
import { subtract } from './calculations.js';
import { multiply } from './calculations.js';
import { divide } from './calculations.js';



// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subtractNumber1 = document.getElementById('subtract-number-1');
const subtractNumber2 = document.getElementById('subtract-number-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');

const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

const divideNumber1 = document.getElementById('divide-number-1');
const divideNumber2 = document.getElementById('divide-number-2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
addButton.addEventListener('click', () => {
    //this code runs when the add button is clicked
    // console.log(add(Number(addNumber1.value), Number(addNumber2.value)));
    const sum = add(Number(addNumber1.value), Number(addNumber2.value));
    console.log(sum);
    addAnswer.textContent = sum;
});

subtractButton.addEventListener('click', () => {
    const difference = subtract(Number(subtractNumber1.value), Number(subtractNumber2.value));
    console.log(difference);
    subtractAnswer.textContent = difference;
});

multiplyButton.addEventListener('click', () => {
    const product = multiply(Number(multiplyNumber1.value), Number(multiplyNumber2.value));
    console.log(product);
    multiplyAnswer.textContent = product;
});

divideButton.addEventListener('click', () => {
    const quotient = divide(Number(divideNumber1.value), Number(divideNumber2.value));
    console.log(quotient);
    divideAnswer.textContent = quotient;
});

