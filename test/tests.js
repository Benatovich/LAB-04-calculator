// IMPORT MODULES under test here:
import { add } from '../calculations.js';
import { subtract } from '../calculations.js';
import { multiply } from '../calculations.js';
import { divide } from '../calculations.js';

const test = QUnit.test;



// name your test by what it is testing
test('adds two numbers 5 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 8;
    // const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);
    // const actual = true; // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtracts two numbers 5 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 2;
    // const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y);
    // const actual = true; // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiplies two numbers 5 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 15;
    // const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y);
    // const actual = true; // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divides two numbers 6 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 6;
    const y = 3;
    const expected = 2;
    // const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);
    // const actual = true; // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

