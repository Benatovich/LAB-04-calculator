// IMPORT MODULES under test here:
// import { add } from '../calculator.js';

const test = QUnit.test;

function add(x, y) {
    return x + y;
}

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
// name your test by what it is testing
test('adds two numbers 4 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 3;
    const expected = 7;
    // const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);
    // const actual = true; // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
