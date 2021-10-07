// import functions
import { add } from './calculations.js';
//console.log(add(50, 212));


// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');


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

